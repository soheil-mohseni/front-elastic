import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyledComponents } from "./global/global_style/GlobalStyledComponents";
import Sidebar from "./global/sidebar";

function App() {

  return (
    <BrowserRouter>
      <GlobalStyledComponents />
      {/* whole container */}
      <div className="w-[100%] h-[100vh]  flex flex-row justify-start items-start">
      <Sidebar></Sidebar>

        <div className="w-full h-[100vh] bg-[#2312] "></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
