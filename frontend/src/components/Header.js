// sfc - Stateless Function Component.
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container header_container flex">
                <h1>Volnews</h1>
                <nav className="flex">
                    <Link to="/">News</Link>
                    <Link to="/create">Create News</Link>
                </nav>
            </div>
        </header>
    );
}
 
export default Header;