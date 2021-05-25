
import React, {useState} from 'react'
import '../App.css'

const Search = ({getQuery}) => {
    const [text,setText]=useState('')
    const onChange=(q)=>{
        setText(q)
        getQuery(q)
    }
    return (
        <section>
            <form>
                <input 
                type='text' 
                className="form-control" 
                placeholder="Buscar personaje. Ejemplo: Walter"
                value={text}
                onChange={(e)=> onChange(e.target.value)}
                autoFocus
                />
                
            </form>
        </section>
    )
}

export default Search;
