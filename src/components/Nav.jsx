import { SiYourtraveldottv } from "react-icons/si"

function Nav () {

    return(
        <>
        <nav className="navbar z-20 fixed top-0 px-10">

        <div className="navbar-start">
        <SiYourtraveldottv  size={30} className='text-white'/>
        <h1 className="text-orange-500 text-2xl font-semibold">Horizon</h1>
        </div>

        <div className="navbar-center  text-white text-sm  border-b-2 py-4  border-white">
            <a className="px-2">DESTINATION</a>
            <a className="px-2">OUR ACTIVITY</a>
            <a className="px-2">ACCOMPANIED</a>
            <a className="px-2">TAIOR-MADE TRIPS</a>
            <a className="px-2">CRUISES</a>
            <a className="px-2">WHO WE ARE?</a>
        </div>

        </nav>
        
        </>
    )
}

export default Nav