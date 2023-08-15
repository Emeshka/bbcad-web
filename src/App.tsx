import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects'
import { EditProject } from './pages/EditProject'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path=":projectTag" element={<EditProject />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
