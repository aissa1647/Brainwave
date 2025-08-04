"use client"



import { useContext } from "react";
import Hero from "./Hero";
import Category from "./Category";
import  { newContext } from "./Context";

export default function All() {

  return (
    <div  className={`  w-[90%] relative space-y-20 mx-auto  mt-35 `}>
  
        <Hero />
        <Category />
        
      
    </div>
  );
}

