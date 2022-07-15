
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className='nav-div'>
            <div className='link-div'>
                <Link to={'/'} id='rez-nav'>Rezervacija</Link>
                <Link to={'/kontakt'}>Kontakt</Link>
            </div>
        </nav>
    )
}

export default Nav;