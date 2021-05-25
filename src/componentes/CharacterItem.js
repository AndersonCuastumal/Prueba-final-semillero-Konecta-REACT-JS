import React, {useState,useEffect} from 'react'
import axios from "axios";
import Frase from './Frase'
import '../App.css'
const CharacterItem = ({item}) => {
    const [quote,setQuote]=useState([])
    
  
    useEffect(() => {
      const fetchQuote=async () =>{
        const result=await axios(`https://www.breakingbadapi.com/api/quote?author=${item.name}`)
        console.log(result.data)
        setQuote(result.data)
        
      }
      fetchQuote()
    },[])

    return (
      
            <div className="card center">
                <div className="card-inner">
                    <div className="card-front">
                    <img  src={item.img} alt="" />
                    </div>
                    <div className="card-back">
                        <h1>{item.name}</h1>
                        <p><Frase quote={quote}/></p>

                    </div>
                </div>
            </div>             

            

    )
}

export default CharacterItem
