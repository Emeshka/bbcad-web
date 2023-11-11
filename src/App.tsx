import './App.css'
import '@mantine/core/styles.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Projects } from './pages/Projects'
import { EditProject } from './pages/EditProject'
import { Header } from './Header'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Header />
        <div id="content">
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path=":id" element={<EditProject />} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
