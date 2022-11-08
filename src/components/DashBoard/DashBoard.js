import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <div class="drawer drawer-mobile  bg-gradient-to-r from-[#303640] to-[#103264] shadow-2xl rounded-3xl p-4">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  ">
          <h3 className="text-2xl font-bold  text-white">
            Welcome to Dashboard
          </h3>
          <Outlet></Outlet>
        </div>
        <div class="drawer-side rounded-2xl ">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu text-white p-4  overflow-y-auto w-80 bg-gradient-to-r from-[rgb(17,57,124)] to-[#a5b7d3]  ">
            <li class="active">
              <a href="index.html">
                <span class="icon">
                  <i class="mdi mdi-desktop-mac"></i>
                </span>
                <span class="menu-item-label">Dashboard</span>
              </a>
            </li>

            <li className="mb-2">
              <Link to="/dashboard">My Appoinment</Link>
            </li>
            <li>
              <Link to="/dashboard/review">My review</Link>
            </li>

            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addDoctor">Add a Doctor</Link>
            </li>
            <li>
              <Link to="/dashboard/manageDoctor">Manage Doctors</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
