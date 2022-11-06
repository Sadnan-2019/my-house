import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
     return (
          <div>
             <div class="drawer drawer-mobile">
                    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content ">
                              <h3 className='text-2xl font-bold text-secondary'>Welcome to Dashboard</h3>
                       <Outlet></Outlet>
                    
                    </div> 
                    <div class="drawer-side">
                      <label for="my-drawer" class="drawer-overlay"></label> 
                      <ul class="menu p-4  overflow-y-auto w-80 bg-base-100 text-base-content">
                       
                        <li className='mb-2'><Link to="/dashboard">My Appoinment</Link></li>
                        <li><Link to="/dashboard/review">My review</Link></li>
                         
                        
                          <li><Link to="/dashboard/users">All Users</Link></li>
                          <li><Link to="/dashboard/addDoctor">Add a Doctor</Link></li>
                          <li><Link to="/dashboard/manageDoctor">Manage Doctors</Link></li>
                        
                        
                        
                       
                      </ul>
                    
                    </div>
                  </div>  
          </div>
     );
};

export default DashBoard;