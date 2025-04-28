import React from 'react';
import { LogOut, LogIn, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = ({user}) => {
  const logout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };
  return (
    <header className="px-8 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">Task Tracker</h1>
        {user ? (
        <button onClick={logout} className="flex items-center gap-2 bg-[#4e342e] text-white font-semibold px-5 py-2 rounded-lg hover:bg-[#6d4c41] transition-all duration-300"><LogOut size={20} /> Logout</button>
      ):(
        <>
           <Link to="/login">
                    <button type="submit" className="group flex justify-center items-center gap-2 bg-gradient-to-r px-8 cursor-pointer from-amber-600 to-amber-800 text-white font-bold text-lg py-4 rounded-xl hover:scale-105 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <span>Get Started</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
          </Link>
       </>
      )}
      
      </div>
    </header>
  );
};

export default Header;
