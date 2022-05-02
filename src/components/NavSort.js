import { NavLink } from 'react-router-dom';

function NavSort() {
  return (
    <div className="nav-sort">
        <ul>
            <li>
                {/* essentially creating virtual links */}
                <NavLink to='/sort/popular'>Popular</NavLink>
            </li>
            <li>
                <NavLink to='/sort/top-rated'>Top Rated</NavLink>
            </li>
            <li>
                <NavLink to='/sort/now-playing'>Now Playing</NavLink>
            </li>
            <li>
                <NavLink to='/sort/upcoming'>Upcoming</NavLink>
            </li>
        </ul>
    </div>
  )
}
export default NavSort