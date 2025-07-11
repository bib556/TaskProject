import React from 'react'

import {useState,useEffect} from "react"
import "./Home.css"
import firstImage from "../../assets/firstImage.jpeg"
import secondImage from "../../assets/secondImage.avif"
import thirdImage from "../../assets/thirdImage.avif"
import fourthImage from "../../assets/fourthImage.avif"
const images = [
    {id:1, src:firstImage},
    {id:2, src:secondImage},
    {id:3, src:thirdImage},
    {id:4, src:fourthImage},
]
function Home() {
  const[currentIndex,setCurrentIndex] = useState(0);
//   console.log(images.length)

 useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 7000);

    return () => clearInterval(interval); // Clean up
  }, []); 

 function handleRightClick(){
    if(currentIndex >= (images.length-1)){
       setCurrentIndex(0)
    }else{
        setCurrentIndex((prevIndex)=>(prevIndex+1))
    }
  
 }
 function handleLeftClick(){
    if(currentIndex <= 0){
        setCurrentIndex(images.length-1)
    }else{
        setCurrentIndex((prevIndex)=>(prevIndex-1))
    }

 }
  return (
    <div className = "home">
      <div className="image">
        <div className="leftButton" > <button onClick = {handleLeftClick}><i id = "arrow" className="fa-solid fa-arrow-left"></i></button></div>
      <img src={images[currentIndex].src} alt="firstImage" /> 
      <div className="rightButton" >   <button onClick = {handleRightClick}><i   className="fa-solid fa-arrow-right"></i> </button></div>
   
        </div> 
    </div>
  )
}

export default Home