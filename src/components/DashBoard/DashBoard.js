import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="bg-[#F5F7FF] ">
      <div class="drawer drawer-mobile   ">
        <input id="my-drawer" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content  ">
          <Outlet></Outlet>
        </div>
        <div class="drawer-side  ">
          <label for="my-drawer" class="drawer-overlay"></label>
          <ul class="menu text-black shadow-lg p-4  overflow-y-auto w-60 bg-white  ">
            <div className="flex justify-items-center items-center">
              
              <li class=" ">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </div>
            <div className="flex justify-items-center items-center">
              <img
                alt=""
                className="w-4"
                src="https://cdn-icons-png.flaticon.com/512/863/863823.png"
              />
              <Menu
                animate={{
                  mount: { y: 0 },
                  unmount: { y: 25 },
                }}
                className="bg-white"
              >
                <MenuHandler>
                  <Button className="bg-white shadow-none text-black shadow-0">
                    Land Lord
                  </Button>
                </MenuHandler>
                <MenuList>
                  <MenuItem>
                    <li className=" hover:shadow-none">
                      <Link to="/dashboard/landlord">Add Landlord</Link>
                    </li>
                  </MenuItem>
                  <MenuItem>Manage Lanlord</MenuItem>
                  {/* <MenuItem>Menu Item 3</MenuItem> */}
                </MenuList>
              </Menu>
            </div>
            <li>
              <Link to="/dashboard/review">My review</Link>
            </li>

            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
