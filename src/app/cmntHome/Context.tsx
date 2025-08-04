"use client"
import React, { useState } from 'react'
import { createContext } from 'react'

export const newContext=createContext()

function Context({children}) {
  const [select, setSelect] = useState(false);
  return (
    <newContext.Provider value={{setSelect,select}}>
      {children}
    </newContext.Provider>
  )
}

export default Context
