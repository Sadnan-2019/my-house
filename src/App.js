import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       
        
        
        {/* <Route path="/login" element={<Login/>}></Route> */}
        {/* <Route path="/signup" element={<SignUp />}></Route> */}

         

        <Routes>
         
        <Route path='/login' element={<Login/>}></Route>
 
       
      </Routes>
       
    </div>
  );
}

export default App;
