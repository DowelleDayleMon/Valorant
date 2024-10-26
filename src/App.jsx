import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from './css/App.module.css'
import Agents from "./pages/Agents"
import Astra from "./pages/AgentDetails/Astra"
import Footer from "./components/Footer"

function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Agents />}/>
          <Route path="/Agents/Astra" element={<Astra />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
