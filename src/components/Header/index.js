import "./styles.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const Header = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('userId');
        navigate('/');
    }

    return (
        <div class="card-header" style={{position: 'relative'}}>
                <h3 class="header-text">
                    Sparky Product  
                </h3>
            <Link to={"/main"} className="btn-header-index">Início</Link>
            <Link to={"/product"} className="btn-header-product">Produtos</Link>
            <Link to={"/category"} className="btn-header-category">Categorias</Link>
            <button className="btn-logout-index" onClick={logout}>Logout</button>
        </div>
    );
}

export default Header;