import React from 'react'
import FraseItem from './FraseItem'
import '../App.css'
const Frase = ({quote}) => {
    return (
        <div>

             
             {quote.map((quoteF)=>(
                <FraseItem key={quoteF.quote_id} quoteF={quoteF}/>
                
            ))}
    
        </div>
    )
}

export default Frase
