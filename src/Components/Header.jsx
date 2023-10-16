import { Link, useNavigate } from "react-router-dom";
import {
    AiOutlineSearch,
    AiFillBell,
    AiFillVideoCamera,
  } from 'react-icons/ai';

const Header = () => {

  const navigate = useNavigate()

const handleSubmit = (e) => {
    e.preventDefault()
 const query = e.target[0].value
 navigate(`/results?search_query=${query}`)

}

  return (
    <header className="flex justify-between items-center p-4">
      <Link to={'/'} className="flex items-center gap-[10px]">
        <img className="w-[50px]" src="/Youtube.png" alt="Logo" />
        <h1 className="text-2xl hidden md:block">Youtube</h1>
      </Link>
      <form onSubmit={handleSubmit} className="flex items-center bg-black border border-gray-400 rounded-[20px] py-1 px-3 overflow-hidden">
        <input className="bg-black outline-none" type="search" />
        <button className="grid place-items-center border-l px-1 h-full text-lg">
          {" "}
          <AiOutlineSearch />{" "}
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer ">
      <AiFillBell />
        <AiFillVideoCamera />
      </div>
    </header>
  );
};

export default Header;
