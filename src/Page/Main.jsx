import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import Project from '../components/Project'
import About from '../components/About'
import Education from '../components/Education'

const Main = () => {
  return (
        <>
            <Header/>
            <Banner/>
            <About/>
            <Project/>
            <Skills/>
            <Education/>
            <Footer/>
        </>
    )
}

export default Main
