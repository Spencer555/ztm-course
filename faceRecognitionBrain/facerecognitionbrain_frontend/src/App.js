import React, { useState } from 'react'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import 'tachyons'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import ParticlesBg from 'particles-bg'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import './App.css'

export default function App() {

    const [input, setInput] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [box, setBox] = useState({})


    const calculateFaceLocation = (data) => {
        
        
            const regions = data.outputs[0].data.regions; // Check if 'regions' still exists
            console.log(data)
        
            if (regions && regions.length > 0) {
                const clarifaiFace = regions[0].region_info.bounding_box;
                const image = document.getElementById('inputImage');
                const width = Number(image.width);
                const height = Number(image.height);
        
                return {
                    topRow:  clarifaiFace.top_row * height,
                    leftCol: clarifaiFace.left_col * width,
                    bottomRow: height - (clarifaiFace.bottom_row * height),
                    rightCol: width - (clarifaiFace.right_col * width),
                };
            } else {
                console.log('error', data?.status?.description);
                return {};
            }
        
    }



    const displayFaceBox = (box) => {
        // console.log('box', box)
        setBox(box)
        

    }
    const onInputChange = (e) => {
        setInput(e.target.value)
    }

    const onButtonSubmit = (e) => {
        setImageUrl(input)
        const PAT = '4d43de47dd3b4054aaab1dc8928382de';
        // Specify the correct user_id/app_id pairings
        // Since you're making inferences outside your app's scope
        const USER_ID = 'spencer555';
        const APP_ID = 'ztmReactApp';
        // Change these to whatever model and image URL you want to use
        const MODEL_ID = 'face-detection';
        const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105';
        const IMAGE_URL = imageUrl;

    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Key ' + PAT
            },
            body: JSON.stringify({
                "user_app_id": {
                    "user_id": USER_ID,
                    "app_id": APP_ID
                },
                "inputs": [
                    {
                        "data": {
                            "image": {
                                "url": IMAGE_URL
                                // "base64": IMAGE_BYTES_STRING
                            }
                        }
                    }
                ]
            })
        };

 

        fetch("/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.json())
            //     displayFaceBox(calculateFaceLocation(result))

            .then(result => {

                
                displayFaceBox(calculateFaceLocation(result))
                
            })
            .catch(error => console.log('error', error));


    }
    return (
        <div>
            <ParticlesBg type="polygon" bg={true} />
            <Navigation />
            <Logo />

            <Rank />
            <ImageLinkForm onInputChange={onInputChange} onSubmitButtonImage={onButtonSubmit} />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
            {/* <SignOut/>
      
     
       */}
        </div>
    )
}
