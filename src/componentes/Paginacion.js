import React from 'react'
import '../App.css'
const Paginacion = ({postsPerPage,totalPosts,pagina}) => {

   
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i);
    }
    const renderPageNumbers=pageNumbers.map(
        
        (number)=>{


                return(
                    <div>
                    <li key={number} >
                    <a onClick={()=>pagina(number)} href='!#' >{number}</a>
                    </li>
                    </div>
                );



        }

    );

    return (
        <div >
            <ul className='center'>
                
                {renderPageNumbers} 
  
            </ul>
        </div>
    )
}

export default Paginacion
