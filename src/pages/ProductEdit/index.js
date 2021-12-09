import "./styles.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const ProductEdit = () => {
    const navigate = useNavigate();

    useEffect(() => {
      fillCategory();
    }, [])

    const fillCategory = () => {
      fetch('https://sparkyproduct-default-rtdb.firebaseio.com/category.json')
        .then(res => res.json())
        .then(vals => {
            const select = document.getElementById("product-form-edit-categoria")
            for(let data in vals) {
                select.append(new Option(`${data}`, data))
            }
      })
    }

    return (
        <div>
            <div class="navbar-fixed-top">
        <Header/>
    </div>

    <h1 class="title-edit-product">Editar Produto</h1>

    <form class="product-form-edit" onsubmit="window.location.href='catalog.html'; return false;">
        <div class="mb-3">
            <label class="form-label edit-product-label-name">Nome</label>
            <input class="form-control product-form-edit-nome" id="product-form-edit-nome" type="text" placeholder="Ex: Vassoura"/>
          </div>
        <div class="mb-3">
          <label class="form-label edit-product-label-price">Preço</label>
          <input class="form-control product-form-edit-preco" id="product-form-edit-preco" type="number" min="1" step="any" placeholder="R$ 00.00"/>
        </div>
        <div class="mb-3">
          <label class="form-label edit-product-label-category">Categoria</label>
          <select class="form-control product-form-edit-categoria" id="product-form-edit-categoria"></select>
        </div>
        <button class="btn btn-success product-btn-edit-confirmar" type="submit" onclick="window.location.href='catalog.html'">Confirmar</button>
        <button type="button" class="btn btn-danger product-btn-edit-voltar" style={{marginLeft: '12.7%'}} onClick={() => navigate('/product')}>Cancelar</button>
    </form>
    
    <div class="navbar-fixed-bottom">
        <Footer/>
    </div>
  </div>
    );
}

export default ProductEdit;