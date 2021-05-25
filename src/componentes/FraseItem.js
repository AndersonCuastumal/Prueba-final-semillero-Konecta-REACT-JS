import React, {useState}from 'react'
import {FaStar} from "react-icons/fa"
import '../App.css'
const colors={
    orange:"#ffba5a",
    grey:"#a9a9a9"
}
const FraseItem = ({quoteF}) => {
    const stars = Array(5).fill(0);
    const [currentValue,setCurrentValue]=useState(0);
    const [hoverValue,setHoverValue]=useState(undefined);
    const handleClick=value=>{
        setCurrentValue(value)
    }
    const handleMouseOver=value=>{
        setHoverValue(value)
    }
    const handleMouseLeave=()=>{
        setHoverValue(undefined)
    }
    return (
        <div style={styles.container}>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td colSpan="3">
                        <p>{quoteF.quote}</p>
                    </td>
                    <td >
                       <th>{stars.map((_,index)=>{
                            return(
                                <FaStar 
                                key={index}
                                size={10}
                                style={{
                                    marginRight: 3,
                                    cursor:"pointer"
                                }}
                                color={(hoverValue||currentValue)>index?colors.orange:colors.grey}
                                onClick={()=>handleClick(index+1)}
                                onMouseOver={()=>handleMouseOver(index+1)}
                                onMouseLeave={handleMouseLeave}
                                
                                />
                                )
                            })}
                        </th> 
                    </td >
                    <td colSpan="2">
                        <th>
                            <textarea placeholder="Comentar"/>
                        </th>
                        <th>
                            <button>Enviar</button>
                        </th>
                    
                    </td>
                </tr>
            </table>
            
            

            
            
        </div>
    )
}

const styles={
    container:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center"
    }
}
export default FraseItem
