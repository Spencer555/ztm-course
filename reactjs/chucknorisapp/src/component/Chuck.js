import React, { useEffect, useState } from 'react'
import './Chuck.css'

export default function Chuck() {

    const [getNew, setGetNew] = useState(false)
    const [chuckMan, setchuckMan] = useState({})
    const [categories, setCategories] = useState([])



    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(res => setchuckMan(res))
        fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json()).then(res => setCategories(res))
        

    }, [getNew]);

    const counter = () => { 
        setGetNew(!getNew)
    }

    const getButton = (event) => {
        event.preventDefault()
        console.log(event.target.innerText)

        fetch(`https://api.chucknorris.io/jokes/random?category=${event.target.innerText}`).then(res => res.json()).then(res => {
            setchuckMan(res)
            console.log(res)
        })
        
        
    }
    return (
        <div className='main_div'>
            <h1 className='tc'>Chuck Man </h1>

            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
                {categories?.map((category) => (
                    <span key={category} onClick={getButton}>
                        <a  className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box ml1 mr1 mb2" >
                        <span className="pr1">{category}</span>
                        
                    </a>
                    </span>
                    
                ))}
            </div>

            <div>
                {}
            </div>

            <div>
                <img src={chuckMan?.icon_url} alt="The greatest Actor" width='100px' height='100px'/>
                <h5>{chuckMan?.created_at}</h5>
                <h5>Chuck Once Said: {chuckMan?.value}</h5>



                <div className="flex items-center justify-center pa4">
                    <a href={chuckMan?.url} target="_blank" className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box mr4">
                
                        <span className="pl1">Visit</span>
                    </a>
                    <a  className="f5 no-underline black bg-animate hover-bg-black hover-white inline-flex items-center pa3 ba border-box" onClick={counter}>
                        <span className="pr1">Next</span>
                        
                    </a>
                </div>
            </div>
        </div>
    )
}
 

