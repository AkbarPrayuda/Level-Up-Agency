import LevelUpLogo from "../Elements/LevelUpLogo"
import { Link } from "react-scroll"


const NavbarComponents = () => {
  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    console.log(to);
  };
  return (
    <>
        <nav className="sticky top-0 flex items-center justify-center py-3 bg-white shadow-md bg-opacity-95 md:justify-between font-poppins md:shadow-none">
            <LevelUpLogo />
            <ul className="hidden font-medium md:flex gap-x-20 lg:text-xl md:text-md ">
                {/* <li> <a href="#home" className="hover:border-b-2 hover:border-black">Home</a></li> */}
                <Link 
                   activeClass="active" 
                   to="home" 
                   spy={true} 
                   smooth={true} 
                   offset={0} 
                   duration={500} 
                   onSetActive={handleSetActive}
                  className="border-black hover:cursor-pointer hover:border-b-2"
                >Home</Link>
                <Link 
                   activeClass="active" 
                   to="about" 
                   spy={true} 
                   smooth={true} 
                   offset={0} 
                   duration={500} 
                   onSetActive={handleSetActive}
                  className="border-black hover:cursor-pointer hover:border-b-2"

                >Tentang</Link>
                <Link 
                   activeClass="active" 
                   to="jasa" 
                   spy={true} 
                   smooth={true} 
                   offset={0} 
                   duration={500} 
                   onSetActive={handleSetActive}
                  className="border-black hover:cursor-pointer hover:border-b-2"

                >Jasa</Link>
                {/* <li> <a href="" className="hover:border-b-2 hover:border-black">Kontak</a></li> */}
            </ul>
        </nav>
    </>
  )
}


export default NavbarComponents