import React from "react";
import { Input } from "@material-tailwind/react";

const AddLandLord = () => {
  return (
    <div>
      <h1 className="py-10">add land lord</h1>

      <div className="grid lg:grid-cols-3 justify-items-center">
        <div
          className="      w-5/6 flex items-center justify-center border-2	 gap-5  border-black     p-10"
          style={{
            backgroundColor: "white",
            borderRadius: "25px",
             
            height: "200px",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-bold ">
              {" "}
              ভাড়াটিয়া এক কপি পাসপোর্ট ছবি{" "}
            </h2>
          </div>
        </div>
        <div
          className="      w-5/6      p-10"
          style={{
             
            
            height: "200px",
          }}
        >
         <div className="flex items-center justify-center 	 gap-3   ">
         <div className=" 	">
            {" "}
            <img
              className="w-12"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/85/Insignia_of_Dhaka_Metropolitan_Police_%28DMP%29.svg/250px-Insignia_of_Dhaka_Metropolitan_Police_%28DMP%29.svg.png"
              alt=""
            />{" "}
          </div>
          <div className=" ">
            <h2 className="text-xs font-bold "> ঢাকা মেট্রোপলিটন পুলিশ </h2>

             
          </div>
         </div>

     <div className="mt-5"> 
     <Input variant="static"   placeholder="বিভাগ" />
     <Input variant="static"   placeholder="থানা" />

       
     </div>

        </div>
        <div
          className="      w-5/6 flex items-center justify-center	     p-10"
          style={{
            
            borderRadius: "25px",
            
            height: "200px",
          }}
        >
           
          <div className=" ">
          <Input variant="static"   placeholder="বিভাগ" />
     <Input variant="static"   placeholder="থানা" />
     <Input variant="static"   placeholder="থানা" />
     <Input variant="static"   placeholder="থানা" />
     <Input variant="static"   placeholder="থানা" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLandLord;
