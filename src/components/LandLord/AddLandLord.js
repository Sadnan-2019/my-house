import React, { useState } from "react";
import { Input, Radio } from "@material-tailwind/react";

const AddLandLord = () => {
  const [visible, setVisble] = useState(false);
  const [formValues, setFormValues] = useState([
    { fname: "", occupation: "", age: "", mobile: "" },
  ]);

  // const showReantDetails = () => {
  //    console.log("heloo")

  // };
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  };

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center items-center py-10">
        <div className=" ">
         <div>
          
          <p className="text-2xl font-bold py-2">  Chose Who you are</p>
            
           
         </div>
         
          
          <div className="py-2 gap-5">
          <Radio id="green" name="color" color="green" label="Land Lord"  onClick={() => setVisble(false)}/>
          <Radio id="green" name="color" color="green" label="Rent Person" onClick={() => setVisble(true)}/>
          </div>
     
          
          {visible &&
           <div className="gap-2">
           <Radio   name="color" color="green" label="Family Tenant"   />
           <Radio  name="color" color="green" label="Bachelor Tenant"  />
           <Radio   name="color" color="green" label="Sublet"  />
           </div>
           
           }
           
        </div>
      </div>
      <div id=" ">
        <form method="POST">
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 justify-items-center py-5">
          <div
            className="      w-5/6 flex items-center justify-center border-2	 gap-5  border-black    shadow-lg shadow-white-1000/50   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",

              height: "250px",
            }}
          >
            <div className=" ">
              <h2 className="text-2xl font-bold ">Passport Size Picture</h2>
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
                <h2 className="text-xs font-bold ">
                  {" "}
                  Dhaka Metropolitan Police{" "}
                </h2>
              </div>
            </div>

            <div className="mt-5">
              <Input variant="static" placeholder="Division" />
              <Input variant="static" placeholder="Thana" />
            </div>
          </div>
          <div
            className="      w-5/6 flex items-center justify-center	border-black   border-2   p-10"
            style={{
              backgroundColor: "white",
              borderRadius: "25px",

              height: "250px",
            }}
          >
            <div className="  ">
              <div className="    ">
                <Input variant="static" placeholder="Flat/Floor" />
                <Input variant="static" placeholder="Houe/Holding" />
                <Input variant="static" placeholder="Road" />
                <Input variant="static" placeholder="Area" />
                <Input variant="static" placeholder="Post Code" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 px-12 py-10">
          <div className="  ">
            <div className="    ">
              <Input variant="static" placeholder="Owner of home" />
              <Input variant="static" placeholder="Fathers name" />
              <Input variant="static" placeholder="Mothers name" />
              <div className="flex items-center justify-items-center gap-5">
                <Input variant="static" placeholder="Date of Birth" />
                <Input variant="static" placeholder="Mariteal Status" />
              </div>
              <Input variant="static" placeholder="Present Address" />
              <Input
                variant="static"
                placeholder="Occupation/Organization/Job Location"
              />
              <div className="flex items-center justify-items-center gap-5">
                <Input variant="static" placeholder="Religion" />
                <Input variant="static" placeholder="Educational Status" />
              </div>
              <div className="flex items-center justify-items-center gap-5">
                <Input variant="static" placeholder="Mobile No" />
                <Input variant="static" placeholder="Email" />
              </div>
              <Input variant="static" placeholder="NID" />
              <Input variant="static" placeholder="Passport (if you have) " />
            </div>
            <p className="text-lg text-left mt-5 font-bold">
              Emergency Contact
            </p>
            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="Name" />
              <Input variant="static" placeholder="Relation" />
            </div>
            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="Address" />
              <Input variant="static" placeholder="Mobile No  " />
            </div>
            <p className="text-lg text-left mt-5 font-bold">
              Family/Roomate Details
            </p>
            <div className=" ">
              <form onSubmit={handleSubmit}>
                {formValues.map((element, index) => (
                  <div
                    className="flex items-center justify-items-center gap-2"
                    key={index}
                  >
                    <Input
                      variant="static"
                      placeholder="Family Member Name"
                      type="text"
                      name="fname"
                      value={element.fname || ""}
                      onChange={(e) => handleChange(index, e)}
                    />

                    <Input
                      variant="static"
                      placeholder="Occupation"
                      type="text"
                      name="occupation"
                      value={element.occupation || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <Input
                      variant="static"
                      placeholder="Age"
                      type="text"
                      name="age"
                      value={element.age || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                    <Input
                      variant="static"
                      placeholder="Mobile No"
                      type="text"
                      name="mobile"
                      value={element.mobile || ""}
                      onChange={(e) => handleChange(index, e)}
                    />
                    {index ? (
                      <button
                        type="button"
                        className="btn btn-xs "
                        onClick={() => removeFormFields(index)}
                      >
                        Remove
                      </button>
                    ) : null}
                  </div>
                ))}
                <div className="flex justify-end py-2">
                  <button
                    className=" btn btn-xs   "
                    type="button"
                    onClick={() => addFormFields()}
                  >
                    Add Another One
                  </button>
                </div>
              </form>
            </div>
            {/* <div
              onClick={addNewSkills}
              className=" text-end text-red-500    py-2"
            >
              <p className="text-2xl   "> Add Another One</p>
            </div> */}
            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="Home Servent Name" />
              <Input variant="static" placeholder="NID" />
              <Input variant="static" placeholder="Mobile No" />
              <Input variant="static" placeholder="Permanent Address" />
            </div>
            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="Driver Name" />
              <Input variant="static" placeholder="NID" />
              <Input variant="static" placeholder="Mobile No" />
              <Input variant="static" placeholder="Permanent Address" />
            </div>
            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="Previous HomeLand Name" />
              <Input variant="static" placeholder="Mobile No" />
            </div>
            <Input variant="static" placeholder="  Address" />
            <Input
              variant="static"
              placeholder="  Reason of Leave Previous House"
            />

            <div className="flex items-center justify-items-center gap-5">
              <Input variant="static" placeholder="  Present HomeLand Name " />
              <Input variant="static" placeholder="Mobile No" />
            </div>
            <Input
              variant="static"
              placeholder="Present House Start Living Date"
            />
            <div className="flex items-center justify-items-center   gap-5">
              <Input variant="static" placeholder="  Date " />
              <Input variant="static" placeholder="Signature of Rent Person" />
            </div>
          </div>
          <div className="flex justify-end px-2 py-2">
                  <button
                    className=" btn btn-xs   "
                    type="button"
                     
                  >
                    Save & Continue
                  </button>
                </div>
        </div>
      
        </form>
      </div>
    </div>
  );
};

export default AddLandLord;
