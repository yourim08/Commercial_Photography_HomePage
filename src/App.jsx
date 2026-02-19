import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Equipment from './pages/Equipment'
import Main from './pages/Main'
import Gallery from './pages/Gallery';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App