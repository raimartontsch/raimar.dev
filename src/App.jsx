import SideMenu from './Components/SideMenu'
import Nav from './Components/Nav'
import { BodyContainer } from './Components/UI/BodyContainer.styled'
import GlobalStyle from './GlobalStyles'
import DeEnButton from './Components/DeEnButton'

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <main>
        <DeEnButton/> 
      <SideMenu/>
      <BodyContainer>
      <h1>Welcome</h1>
      <Nav/>
      </BodyContainer>
      </main>
      
    </div>
  )
}

export default App
