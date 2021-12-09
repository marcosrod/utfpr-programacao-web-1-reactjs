import "./styles.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { useRef } from "react";

const CategoryCreate = () => {
    const navigate = useNavigate();
    const nameRef = useRef();

    const addNewCategory = () => {
        fetch(`https://sparkyproduct-default-rtdb.firebaseio.com/category/${nameRef.current.value}.json`, {
          method: "POST",
          body: JSON.stringify({
            name: nameRef.current.value,
          }),
        }).then((res) =>
          res.ok
            ? () => navigate('/category')
            : alert("As informações inseridas são insuficientes ou inválidas.")
        );
      };


    return (
        <div>
            <div className="navbar-fixed-top">
        <Header/>
    </div>

    <h1 className="title-register-category">Cadastrar Categoria</h1>

    <form className="category-form-register" id="category-form-register" onSubmit={addNewCategory}>
        <div className="mb-3">
            <label className="form-label create-category-label-name">Nome</label>
            <input className="form-control category-form-register-nome" ref={nameRef} id="category-form-register-nome" type="text" placeholder="Ex: Limpeza" required />
          </div>
        <button className="btn btn-success category-btn-register-confirmar" type="submit">Confirmar</button>
        <button type="button" className="btn btn-danger category-btn-register-voltar" style={{marginLeft: '12.7%'}} onClick={() => navigate('/category')}>Cancelar</button>
    </form>

    <div className="navbar-fixed-bottom">
        <Footer/>
    </div>
  </div>
    );
}

export default CategoryCreate;