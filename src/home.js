import React from 'react'
import './home.css'
import Header from './compoments/header';
import Main from './compoments/main';
import { useEffect, useState } from 'react'
function Home() {
    const [show,setShow]=useState(false)
    const controlNavbar=()=>{
        if(window.scrollY > 850){
            setShow(false)
            console.log('hello');
        }
        else{
            setShow(true)
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll',controlNavbar)
        return()=>{
            window.removeEventListener('scroll',controlNavbar)
        }
    },[])
  return (
      <div>
        {show?<Header />:null}
        <Main />
      </div>
  )
}

export default Home;