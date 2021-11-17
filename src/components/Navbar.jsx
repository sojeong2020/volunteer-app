import React from 'react';

const Navbar = () => {
    return (
       <nav className="navbar">
           <div className="home">
               <a href="/">Home</a>
           </div>
           <div className="search">
               <a href="/">Search</a>
           </div>
           <button>English</button>
           <button>Welsh</button>

       </nav>
    );
};

export default Navbar;