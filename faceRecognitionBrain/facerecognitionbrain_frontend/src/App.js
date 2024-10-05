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
        const regions = data.outputs[0].data.regions;

        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        console.log(clarifaiFace)

        const image = document.getElementById('inputImage');
        const width = Number(image.width)
        const height = Number(image.height)

        console.log(width, height)
        return {
            // we multiply the col by the width of the image to get the exact point
            bottomRow: height - (clarifaiFace.bottom_row * height),
            leftCol:clarifaiFace.left_col * width,
            rightCol:width - (clarifaiFace.right_col * width),
            topRow: clarifaiFace.top_row * height,
        }
        // regions.forEach(region => {
        //     // Accessing and rounding the bounding box values
        //     const boundingBox = region.region_info.bounding_box;
        //     const topRow = boundingBox.top_row.toFixed(3);
        //     const leftCol = boundingBox.left_col.toFixed(3);
        //     const bottomRow = boundingBox.bottom_row.toFixed(3);
        //     const rightCol = boundingBox.right_col.toFixed(3);

        //     region.data.concepts.forEach(concept => {
        //         // Accessing and rounding the concept value
        //         const name = concept.name;
        //         const value = concept.value.toFixed(4);

        //         console.log(`${name}: ${value} BBox: ${topRow}, ${leftCol}, ${bottomRow}, ${rightCol}`);

        //     });
        // });
    }



    const displayFaceBox = (box) => {
        console.log('box', box)
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
        const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    
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
            .then(result => {

                calculateFaceLocation(result)
                console.log('reed',displayFaceBox(calculateFaceLocation(result)))

                

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
