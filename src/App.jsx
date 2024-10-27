import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from './css/App.module.css'
import Agents from "./pages/Agents"
import Footer from "./components/Footer"

import Astra from "./pages/AgentDetails/Astra"
import Brimstone from "./pages/AgentDetails/Brimstone"
import Breach from './pages/AgentDetails/Breach'
import Chamber from "./pages/AgentDetails/Chamber"
import Clove from "./pages/AgentDetails/Clove"

function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Agents />}/>
          <Route path="/Agents/Astra" element={<Astra />} />
          <Route path="/Agents/Brimstone" element={<Brimstone />} />
          <Route path="/Agents/Breach" element={<Breach />} />
          <Route path="/Agents/Chamber" element={<Chamber />} />
          <Route path="/Agents/Clove" element={<Clove />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
