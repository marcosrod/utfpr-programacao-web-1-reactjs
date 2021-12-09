import "./styles.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const CategoryEdit = () => {
    const navigate = useNavigate();
    const category = useSelector(state => state.category.category);
    return (
        <div>
            <div class="navbar-fixed-top">
        <Header/>
    </div>

    <h1 class="title-edit-category">Editar {category}</h1>

    <form class="category-form-edit">
        <div class="mb-3">
            <label class="form-label edit-category-label-name">Nome</label>
            <input class="form-control category-form-edit-nome" id="category-form-edit-nome" type="text" placeholder="Ex: Limpeza"/>
          </div>
        <button id="category-btn-confirm-edit" class="btn btn-success category-btn-edit-confirmar" type="submit">Confirmar</button>
        <button type="button" class="btn btn-danger category-btn-edit-voltar" style={{marginLeft: '12.7%'}} onClick={() => navigate('/category')}>Cancelar</button>
    </form>
    
    <div class="navbar-fixed-bottom">
        <Footer/>
    </div>
  </div>
    );
}

export default CategoryEdit;