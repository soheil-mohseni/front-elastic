import { Icon } from "@iconify-icon/react/dist/iconify.mjs";

function MenuBar() {
  return (
    <ul className="w-full h-[84vh] flex flex-col items-center justify-start">
      <li
        style={{ transitionDuration: "400ms" }}
        className="flex flex-row justify-start items-center w-[75%] mt-[1.75rem]  hover:bg-[#e0e1e4] rounded-[13%] pl-[11px] py-[5px] cursor-pointer transition-all  ease-in-out"
      >
        <Icon
          icon="mynaui:config"
          width="1.55rem"
          height="1.55rem"
          style={{ color: "#5f6061" }}
          className="pr-[15px]"
        />
        <p className="text-[#5f6061] text-[1.15rem]">Config</p>
      </li>
      <li
        style={{ transitionDuration: "400ms" }}
        className="flex flex-row justify-start items-center w-[75%] mt-[1.75rem] hover:bg-[#e0e1e4] rounded-[13%] pl-[11px] py-[5px] cursor-pointer transition-all  ease-in-out"
      >
        <Icon
          icon="ic:outline-factory"
          width="1.55rem"
          height="1.55rem"
          style={{ color: "#5f6061" }}
          className="pr-[15px]"
        />
        <p className="text-[#5f6061] text-[1.15rem]">Core</p>
      </li>{" "}
    </ul>
  );
}

export default MenuBar;
