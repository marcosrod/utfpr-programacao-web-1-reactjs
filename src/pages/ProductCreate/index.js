import "./styles.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";

const ProductCreate = () => {
    const navigate = useNavigate();
    const nameRef = useRef();
    const priceRef = useRef();
    const categoryRef = useRef();

    useEffect(() => {
      fillCategory();
    }, [])

    const fillCategory = () => {
      fetch('https://sparkyproduct-default-rtdb.firebaseio.com/category.json')
        .then(res => res.json())
        .then(vals => {
            const select = document.getElementById("product-form-register-categoria")
            for(let data in vals) {
                select.append(new Option(`${data}`, data))
            }
      })
    }

    const addNewProduct = () => {
      fetch("https://sparkyproduct-default-rtdb.firebaseio.com/product.json", {
        method: "POST",
        body: JSON.stringify({
          name: nameRef.current.value,
          price: priceRef.current.value,
          category: categoryRef.current.value,
        }),
      }).then((res) =>
        res.ok
          ? () => navigate('/product')
          : alert("As informações inseridas são insuficientes ou inválidas.")
      );
    };
    

    return (
        <div>
            <div className="navbar-fixed-top">
        <Header/>
    </div>

    <h1 className="title-register-product">Cadastrar Produto</h1>

    <form className="product-form-register" id="product-form-register" onSubmit={addNewProduct}>
        <div className="mb-3">
            <label className="form-label create-product-label-name">Nome</label>
            <input className="form-control product-form-register-nome" ref={nameRef} id="product-form-register-nome" type="text" placeholder="Ex: Vassoura" required/>
          </div>
        <div className="mb-3">
          <label className="form-label create-product-label-price">Preco</label>
          <input className="form-control product-form-register-preco" ref={priceRef} id="product-form-register-preco" type="number" min="1" step="any" placeholder="R$ 00.00" required/>
        </div>
        <div className="mb-3">
          <label className="form-label create-product-label-category">Categoria</label>
          <select className="form-control product-form-register-categoria" ref={categoryRef} id="product-form-register-categoria"></select>
        </div>
        <button className="btn btn-success product-btn-register-confirmar" type="submit">Confirmar</button>
        <button type="button" className="btn btn-danger product-btn-register-voltar" style={{marginLeft: '12.5%'}} onClick={() => navigate('/product')}>Cancelar</button>
    </form>

    <div className="navbar-fixed-bottom">
        <Footer/>
    </div>
  </div>
    );
}

export default ProductCreate;