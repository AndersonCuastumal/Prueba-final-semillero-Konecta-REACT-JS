import React, {useState,useEffect}from 'react'
import axios from "axios";
import Header from './componentes/Header'
import Characters from './componentes/Characters'
import Search from './componentes/Search'
import Paginacion from './componentes/Paginacion'
import './App.css'
const App =()=>{
  const [items,setItems]=useState([])
  const [isLoading, setIsLoading]=useState(true)
  const [query, setQuery]=useState('')
  const [currentPage,setCurrentPage]=useState(1)
  const [postsPerPage]=useState(5)


  useEffect(() => {
  
  const fetchItems=async () =>{
      const result=await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      //console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  },[query])
//paginacion
const indexOfLastPost=currentPage*postsPerPage;
const indexOfFirstPost=indexOfLastPost-postsPerPage;
const currentPosts=items.slice(indexOfFirstPost,indexOfLastPost);
//cambio de pagina
const pagina =(pageNumber)=>setCurrentPage(pageNumber)
  return(
    <div className="container">

        <Header/>
        <Search getQuery={(q)=>setQuery(q)}/>
        <br></br>
        <Characters isLoading={isLoading} items={currentPosts}/>
        <br></br>
       
        <Paginacion postsPerPage={postsPerPage} totalPosts={items.length} pagina={pagina}/>
       

    </div>
    
    
  );
}
export default App;