import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Agents from "./pages/Agents"
import Footer from "./components/Footer"

import Astra from "./pages/AgentDetails/Astra"
import Brimstone from "./pages/AgentDetails/Brimstone"
import Breach from './pages/AgentDetails/Breach'
import Chamber from "./pages/AgentDetails/Chamber"
import Clove from "./pages/AgentDetails/Clove"
import Cypher from "./pages/AgentDetails/Cypher"
import Fade from './pages/AgentDetails/Fade'
import Deadlock from "./pages/AgentDetails/Deadlock"
import Gekko from "./pages/AgentDetails/Gekko"
import Harbor from "./pages/AgentDetails/Harbor"

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
          <Route path="/Agents/Cypher" element={<Cypher />} />
          <Route path="/Agents/Deadlock" element={<Deadlock />} />
          <Route path="/Agents/Fade" element={<Fade />} />
          <Route path="/Agents/Gekko" element={<Gekko />} />
          <Route path="/Agents/Harbor" element={<Harbor />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
