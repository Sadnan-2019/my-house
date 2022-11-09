import React, { useEffect, useState } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyAppoinment = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`data.json`)
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
     return (
      <div>
        <section class="is-title-bar text-white  rounded-xl px-10 mx-10 mt-3 bg-gradient-to-r from-[rgb(17,57,124)] to-[#8b2626]  ">
  <div class="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
    <ul>
      <li>Admin</li>
      <li>Dashboard</li>
    </ul>
    <a href="https://justboil.me/" onclick="alert('Coming soon'); return false" target="_blank" class="button blue">
      <span class="icon"><i class="mdi mdi-credit-card-outline"></i></span>
      <span>Premium Demo</span>
    </a>
  </div>
</section>
<h1 className="text-center my-instrument py-4 font-bold text-xl text-black">My Chart</h1>
<div className='grid sm:grid-sm-1 lg:grid-cols-3 gap-10 px-5 '>

 
<div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
          <h2 class="card-title">My Info Security</h2>
            
             
          </div>
        </div>
      </div>
    </div>
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
          <h2 class="card-title">House Management</h2>
             
          </div>
        </div>
      </div>
    </div>
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
          <h2 class="card-title">House Maintance</h2> 
             
          </div>
        </div>
      </div>
    </div>
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
          <h2 class="card-title">Asset Management</h2>
            
             
          </div>
        </div>
      </div>
    </div>
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center    ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5  ">
          <h2 class="card-title  ">Asset Flate House Land</h2>
             
             
          </div>
        </div>
      </div>
    </div>
    <div class="card  bg-gradient-to-r from-green-400 to-blue-500 shadow-xl  text-white mb-5 mt-12">
      <div class="card-body">
        
        
        <div class="flex items-center   ">
          <div>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100  mr-5">
                <img src= "https://placeimg.com/192/192/people" alt="" />
              </div>
            </div>
          </div>

          <div class="mr-5 ">
          <h2 class="card-title">House Hold Service</h2>
          
             
          </div>
        </div>
      </div>
    </div>

</div>

      
      <div className="flex justify-center items-center   ">
            
            <div className="text-white">
              <BarChart fill="#8884d8"  width={400} height={300} data={datas}  >
                <XAxis dataKey="month" tick="investment"  />
                <YAxis fill="#8884d8"   />
                <Tooltip fill="#8884d8" ></Tooltip>
                <Bar dataKey="sell"   barSize={30} fill="#8884d8" label="investment" />
              </BarChart>
            </div>
             
      
            <div className=" ">
              <PieChart width={400} height={400}>
                <Pie
                  data={datas}
                  dataKey="sell"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#82ca9d"
                />
                <Pie
                  data={datas}
                  dataKey="investment"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
                <Tooltip></Tooltip>
              </PieChart>
            </div>
          </div>
{/* tablepok */}
          <div className="overflow-x-auto w-full px-10">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th>
           
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
       
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Brice Swyre</div>
              <div className="text-sm opacity-50">China</div>
            </div>
          </div>
        </td>
        <td>
          Carroll Group
          <br/>
          <span className="badge badge-ghost badge-sm">Tax Accountant</span>
        </td>
        <td>Red</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
       
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Marjy Ferencz</div>
              <div className="text-sm opacity-50">Russia</div>
            </div>
          </div>
        </td>
        <td>
          Rowe-Schoen
          <br/>
          <span className="badge badge-ghost badge-sm">Office Assistant I</span>
        </td>
        <td>Crimson</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
       
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://placeimg.com/192/192/people" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Yancy Tear</div>
              <div className="text-sm opacity-50">Brazil</div>
            </div>
          </div>
        </td>
        <td>
          Wyman-Ledner
          <br/>
          <span className="badge badge-ghost badge-sm">Community Outreach Specialist</span>
        </td>
        <td>Indigo</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    </tbody>
  
    {/* <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot> */}
    
  </table>

  {/* <footer></footer> */}
  <footer className="footer items-center p-4     text-neutral-content  mt-9">
  <div className="items-center grid-flow-col text-black">
    <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-black">
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
    </a> 
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
    <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
  </div>
</footer>
</div>







         </div>
     );
};

export default MyAppoinment;