

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Header from './component/Header';
import Footer from './component/Footer';
import CreateFitness from './component/CreateFitness';
import FitnessList from './component/FitnessList';
import UpdateFitness from './component/UpdateFitness';


import './App.css';

function App() {
  return (
    <BrowserRouter>
            <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<FitnessList/>} /> 
        <Route path='/fitness/create' element={<CreateFitness/>} />
        <Route path='/fitness/:fitID/update' element={<UpdateFitness/>} />
      </Routes>
      
      
      <Footer />
   
    </div>
    </BrowserRouter>
  );
}

export default App;
