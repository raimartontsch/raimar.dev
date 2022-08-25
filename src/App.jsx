import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Nav'

function App() {

  return (
    <div className="App">
      <button>De/En</button>
      <main>
      <h1>Welcome</h1>
      <Nav/>
      </main>
      <footer>
        <p>Impressum</p>
        <p>Kontakt</p>
      </footer>

    </div>
  )
}

export default App
