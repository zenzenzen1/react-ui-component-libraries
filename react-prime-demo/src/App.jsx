import './App.css'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import DynamicTable from './components/DynamicTable';
import DialogDemo from './components/DialogDemo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dynamic-table" element={<DynamicTable />} />
        <Route path="/dialog-demo" element={<DialogDemo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
