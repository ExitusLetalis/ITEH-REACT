
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav-div'>
            <Link to={'/rezervacija'}>Rezervacija</Link>
            <Link to={'/kontakt'}>Kontakt</Link>
        </nav>
    )
}

export default Nav;