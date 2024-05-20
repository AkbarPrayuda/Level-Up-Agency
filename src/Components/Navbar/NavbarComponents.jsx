import LevelUpLogo from "../Elements/LevelUpLogo"

const NavbarComponents = () => {
  return (
    <>
        <nav className="flex lg:w-10/12 md:w-5/6 justify-between mx-auto py-8 items-center font-poppins shadow-md md:shadow-none">
            <div className="logo mx-auto md:mx-0 md:w-36 lg:w-full">
                <LevelUpLogo/>
            </div>
            <ul className="hidden md:flex gap-x-20 font-medium lg:text-xl md:text-md ">
                <li> <a href="" className="hover:border-b-2 hover:border-black">Home</a></li>
                <li> <a href="" className="hover:border-b-2 hover:border-black">Tentang</a></li>
                <li> <a href="" className="hover:border-b-2 hover:border-black">Kontak</a></li>
                <li> <a href="" className="hover:border-b-2 hover:border-black">Jasa</a></li>
            </ul>
        </nav>
    </>
  )
}


export default NavbarComponents