import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects'
import { EditProject } from './pages/EditProject'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path=":projectTag" element={<EditProject />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
