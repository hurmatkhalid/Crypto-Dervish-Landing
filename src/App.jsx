
import Landing from '../components/Landing'
import Navbar from '../components/Navbar'
import About from '../components/About'
import './App.css'
import Vision from '../components/Vision'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import data from '../components/dataFAQ.js'
import FAQhead from '../components/FAQhead'

function App() {
  const dataItems = data.map(item =>{
    return <FAQ
        key={item.id}
        item={item}
    />
    })
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About />
      <Vision />
      <FAQhead />
      {dataItems}
      <Footer />
    </div>
  )
}

export default App
