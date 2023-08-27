import React from 'react'
import {ReactElement} from 'react'
import Header from './Header/Header'
import BottomHeader from './Header/BottomHeader'
import Footer from './Footer/Footer'


interface props{
    children:ReactElement
}

const RootLayout = ({children}:props) => {
  return (
    <div>
        <Header/>
        <BottomHeader/>
        {children}
        <Footer/>
    </div>
  )
}

export default RootLayout