import './App.css'
import '@mantine/core/styles.css'

import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
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
            <Route path="/*" element={<>
              <Outlet />
              <Routes>
                <Route index element={<Projects />} />
                <Route path="project/:id" element={<EditProject />} />
              </Routes>
            </>} />
          </Routes>
        </div>
      </BrowserRouter>
    </MantineProvider>
  )
}

export default App
//<Route path="/project/:id" element={<EditProject />} />