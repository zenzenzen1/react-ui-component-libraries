import './App.css'
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import DynamicTable from './components/DynamicTable';
import DialogDemo from './components/DialogDemo';
import TableDemo from './components/TableDemo';
import TemplateDemo from './components/UploadDemo';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dynamic-table" element={<DynamicTable />} />
        <Route path="/dialog-demo" element={<DialogDemo />} />
        <Route path='/table-demo' element={<TableDemo />} />
        <Route path='/upload-demo' element={<TemplateDemo/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
