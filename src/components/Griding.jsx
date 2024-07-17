import React from "react";

function Griding() {
  return (
    
    <div className="container">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 overflow-hidden overflow-x-hidden">
        <div class="p-4 border ">
          <img src="grid.jpg" alt="" />
          
        </div>
        <div class="p-4 border">
          <img src="grid.jpg"alt="" />
        </div>
        <div class="p-4 border">
          <img src="grid.jpg" alt="" />
        </div>
        <div class="p-4 border">
          <img src="grid.jpg" alt="" />
        </div>
      </div>

      <div className="grid lg:grid-cols-6 gap-4">
        <div className="col-span-4"> <img src="grid.jpg" alt="" /></div>
        <div className="col-span-2"> <img src="grid.jpg" alt="" /></div>


      </div>
    </div>
  );
}

export default Griding;
