import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import styles from './css/App.module.css'
import Agents from "./pages/Agents"
import Footer from "./components/Footer"

import Astra from "./pages/AgentDetails/Astra"
import Brimstone from "./pages/AgentDetails/Brimstone"

function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Agents />}/>
          <Route path="/Agents/Astra" element={<Astra />} />
          <Route path="/Agents/Brimstone" element={<Brimstone />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
