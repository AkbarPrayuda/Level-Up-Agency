import LevelUpLogo from "../Elements/LevelUpLogo"

const NavbarComponents = () => {
  return (
    <>
        <nav className="flex items-center justify-center mb-20 shadow-md md:justify-between font-poppins md:shadow-none">
            <div className="py-4 mx-auto md:py-0 logo md:mx-0 md:w-36 lg:w-full">
                <LevelUpLogo/>
            </div>
            <ul className="hidden font-medium md:flex gap-x-20 lg:text-xl md:text-md ">
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