import { NavLink } from 'react-router-dom';

    // Sends the carousel back to the start
    function backToSort() {
        document.getElementById('snaps-inline').scrollTo({
            left: 0,
            behavior: 'smooth'
        })
    }

function NavSort() {
  return (
    <nav className="nav-sort">
        <ul>
            <li>
                {/* essentially creating virtual links */}
                <NavLink to='/sort/popular' onClick={backToSort}>Popular</NavLink>
            </li>
            <li>
                <NavLink to='/sort/top-rated' onClick={backToSort}>Top Rated</NavLink>
            </li>
            <li>
                <NavLink to='/sort/now-playing' onClick={backToSort}>Now Playing</NavLink>
            </li>
            <li>
                <NavLink to='/sort/upcoming' onClick={backToSort}>Upcoming</NavLink>
            </li>
        </ul>
    </nav>
  )
}
export default NavSort