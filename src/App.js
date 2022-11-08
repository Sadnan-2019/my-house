import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import DashBoard from './components/DashBoard/DashBoard';
import MyAppoinment from './components/DashBoard/MyAppoinment';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
       
        
        
        {/* <Route path="/login" element={<Login/>}></Route> */}
        {/* <Route path="/signup" element={<SignUp />}></Route> */}

         

        <Routes>
         
        <Route path='/login' element={<Login/>}></Route>
        <Route
          path="dashboard"
          element={
            
              <DashBoard/>
             
          }
        >
          <Route index element={<MyAppoinment></MyAppoinment>} />
          <Route path="review" element={<MyAppoinment></MyAppoinment>} />
          {/* <Route path="review" element={<MyReview></MyReview>} />
          <Route path="payment/:id" element={<Payment/>} />
          <Route path="mobile-payment/:id" element={<MobileBanking/>} />
          <Route path="users" element={<RequireAdmin><AllUsers></AllUsers></RequireAdmin>} />
          <Route path="addDoctor" element={<AddDoctor></AddDoctor>} />
          <Route path="manageDoctor" element={<ManageDoctor></ManageDoctor>} /> */}
        </Route>
       
      </Routes>
       
    </div>
  );
}

export default App;
