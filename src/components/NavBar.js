import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link to='/' className="btn btn-ghost normal-case text-xl">Mi app</Link>
    </div>
    <div className="flex-1">
        <Link to='/shop' className="btn btn-ghost normal-case text-xl">Tienda 2</Link>
    </div>
    <div className="flex-1">
        <Link to='/cart' className="btn btn-ghost normal-case text-xl">Cart</Link>
    </div>
    <div className="flex-none gap-2">
        <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
        </div>
        <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" />
            </div>
        </label>
        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
            <Link to='/ram' className="justify-between">
                Rick and Morty
                {/* <span className="badge">New</span> */}
            </Link>
            </li>
            <li><Link to='/swapi'>StarWars</Link></li>
            <li><a>Logout</a></li>
        </ul>
        </div>
    </div>
    </div>
  )
}
export default NavBar