import React from 'react';

const MyAppoinment = () => {
     return (
          <div>
            <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
      Carrer

      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 px-12 gap-10  items-center justify-items-center">
        <div>
          <p className="text-neutral text-1xl p-5">
            We consider the people of MRG GROUP to be our greatest asset. We
            serve the needs of our businesses by implementing key hiring
            processes and creating a performance-driven culture for the group’s
            companies.
          </p>
          <p className="text-neutral text-1xl p-5">
            We attract, develop and retain talent, ensuring employee inclusion
            and engagement. Throughout our work, we strive to deliver clear,
            simple and effective services for the well-being of our people.
          </p>
          <p className="text-neutral text-1xl p-5">
            If you have the expertise and the desire to join MRG GROUP, click
            the button below for possibilities and opportunities.
          </p>
          <div className="py-2 px-5">
            <button className="btn btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
              Drop your cv
            </button>
          </div>
        </div>
        <div className="py-4">
          {/* <img src={career} alt=""/> */}
        </div>
      </div>
    </div>   
          </div>
     );
};

export default MyAppoinment;