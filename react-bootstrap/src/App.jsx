import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Table from './components/Table'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/table" element={<Table />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
