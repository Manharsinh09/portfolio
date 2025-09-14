import { useState } from 'react'
import './App.css'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme } from './utils/Themes'
import { Navbar } from './components/Navbar'
import { BrowserRouter } from 'react-router'
import { HeroSection } from './components/HeroSection'
import { Skills } from './components/Skills'
import { Project } from './components/Project'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import StyledStarsCanvas from './components/HeroBgAnimation/Star'

const Body = styled.div`
    width: 100%;
    position: relative;
    min-height: 100vh;
    background-color: ${({theme})=>theme.bg};
    font-family: 'IBM Plex Sans', sans-serif;
`;

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        <Body>
          
          <StyledStarsCanvas/>
          <div>
            <HeroSection/>
            <Skills/>
            <Project/>
            <Education/>
            <Footer/>
            
          </div>
        </Body>
        
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
