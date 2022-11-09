import React from "react";
import { Input } from "@material-tailwind/react";

const AddLandLord = () => {
  let number = 2;
  //     const [usersTemplateInfo, setUsersTemplateInfo] = useOutletContext();
  //     const navigate = useNavigate();
  //     const { _id } = useParams();

  function addNewSkills() {
    number++;
    let newNode = document.createElement("input");
    newNode.classList.add(
      "input",
      "input-bordered",
      "w-full",
      "mb-4",
      "mt-4",
      "h-14",
      "Address"
    );
    newNode.setAttribute("type", "text");
    newNode.setAttribute("placeholder", "Address");
    newNode.setAttribute("name", `Address${number}`);

    let parentFrom = document.getElementById("skillsId");
    parentFrom.appendChild(newNode);
  }

  // Get input field values and store
  //     let str = {
  //             name: "Skills",
  //             value: []
  //     };// store input values
  //     const getValue = () => {
  //         str.value = [];
  //         const skills = document.getElementsByClassName("skills");
  //         for (let e of skills) {
  //             str.value.push(e.value);
  //         }

  //         setUsersTemplateInfo({...usersTemplateInfo, skills:str})
  //         navigate(`/resume-builder/${_id}/add-projects`)
  //         console.log(usersTemplateInfo);
  //     }

  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center items-center py-10">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text font-bold text-1xl">
              Chose Who you are
            </span>
          </label>
          <select className="select select-bordered">
            <option id="landlord"> Land Lord</option>
            <option>
              <a class="nav-link" href="#rentperson">
                Rent Person
              </a>
            </option>
          </select>
        </div>
      </div>
      <div id="rentperson">
        <div className="grid lg:grid-cols-3 justify-items-center py-5">
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
            <div className="flex  ">
              <form id="skillsId" className="mt-12 w-[100%] md:w-[80%]">
                <div className="flex items-center justify-items-center gap-5">
                  <Input variant="static" placeholder="Name" />
                  <Input variant="static" placeholder="Relation  " />
                </div>
                <div className="flex items-center justify-items-center gap-5">
                  <Input variant="static" placeholder="Address" />
                  <Input variant="static" placeholder="Mobile No  " />
                </div>
              </form>
            </div>
            <div
              onClick={addNewSkills}
              className="flex justify-center items-center text-accent   py-2"
            >
              <p className="text-lg   "> Add Another One</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLandLord;
