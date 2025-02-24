
import { createRoot } from "react-dom/client";
import "./../src/index.css";


const root = createRoot(document.getElementById("root"));
   function App() {
    return (
     <div>
        <h1 className="text-4xl font-bold underline">Helloo nidhi</h1>
    </div>   
    );
   }

 
root.render(
   <>
   <App/>
   </>
);


