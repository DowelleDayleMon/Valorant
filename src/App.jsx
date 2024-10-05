import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Agents from "./pages/Agents"

function App() {


  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Agents />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
