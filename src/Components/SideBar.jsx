import { useContext } from "react";
import { categories } from "../utils/constants";
import { YoutubeContext } from "../context/youtubeContext";

const SideBar = () => {
  const { selectedCategory, setSelectedCategory } = useContext(YoutubeContext);


  return (
    <nav className="flex flex-col pl-1">
      {categories.map((item, i) => (
        <div key={i}>
          <div
            onClick={() => setSelectedCategory(item)}
            className={`${
              item.name === selectedCategory.name && "bg-[#2b2a2a]"
            } flex gap-1 items-center py-2 px-1 md:px-2 text-md cursor-pointer rounded-md hover:bg-[#2d2d2d]`}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
          {item.divider && <hr />}
        </div>
      ))}
    </nav>
  );
};

export default SideBar;
