import React from 'react';
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar/Navbar";




function Home(){
    return(
      <div>
          <Navbar/>
      </div>
    );
   
}




const root = createRoot(document.getElementById("root"));
root.render(
   <>
    
   <Home/>
   </>
);


