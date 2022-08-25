import Nav from './Components/Nav'
import GlobalStyle from './GlobalStyles'

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
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
