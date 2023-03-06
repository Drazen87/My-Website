import './navbar.css';
//import { AiFillApi } from "react-icons/ai";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);


    return (
        <>


        <nav className="navbarAllgemein">
            <p>Modern </p>
            <p>Produkte </p>
            <p>Rezessionen </p>
            <p>Team </p>
            <p>Kontakt </p>
        </nav>
        <div className="navbar-menu">
            {openMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setOpenMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setOpenMenu(true)} />
            }
        </div>
        <div>
            {openMenu && (
                <div className="navbar-menu navbarAllgemeinMedia">
                    <p>Modern </p>
                    <p>Produkte </p>
                    <p>Rezessionen </p>
                    <p>Team </p>
                    <p>Kontakt </p>
                </div>
            )}
        </div>    
        
        </>
        

    );
};

export default Navbar

