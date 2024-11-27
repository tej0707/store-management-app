
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './template/Header';
import AddProduct from './include/AddProduct';
import ViewProduct from './include/ViewProduct';


function App() {
  
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <div className='App'>
      
      <Routes>
      
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/view' element={<ViewProduct/>}/>
        <Route path='/add/:id' element={<AddProduct/>}/>
        </Routes>
        </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
