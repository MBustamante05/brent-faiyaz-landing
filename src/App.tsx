import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
    </div>
  )
}

export default App
