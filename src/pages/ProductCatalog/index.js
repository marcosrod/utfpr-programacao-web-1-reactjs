import "./styles.css"
import { useNavigate } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import CreateButton from "../../components/CreateButton";

const ProductCatalog = () => {
    const navigate = useNavigate();
    useEffect(() => {
      fillTable();
    }, [])

    const fillTable = () => {
      const table = document.getElementById("product-table");

    fetch('https://sparkyproduct-default-rtdb.firebaseio.com/product.json')
            .then(res => res.json())
            .then(vals => {
                for(let data in vals) {
                    let row = table.insertRow();
                    let name = row.insertCell(0);
                    name.innerHTML = vals[data].name;
                    let price = row.insertCell(1);
                    price.innerHTML = vals[data].price;
                    let category = row.insertCell(2);
                    category.innerHTML = vals[data].category;
                    let btnEdit = document.createElement("button");
                    btnEdit.classList.add("btn-edit");
                    let iconEdit = document.createElement("i");
                    btnEdit.classList.add("fa-solid", "fa-pen-to-square", "icon-btn-edit");
                    btnEdit.appendChild(iconEdit);
                    btnEdit.addEventListener("click", () => navigate('/product/edit'));
                    let btnDelete = document.createElement("button");
                    btnDelete.classList.add("btn-delete");
                    let iconDelete = document.createElement("i");
                    btnDelete.classList.add("fa-solid", "fa-trash", "icon-btn-delete");
                    btnDelete.appendChild(iconDelete);
                    btnDelete.setAttribute("data-toggle", "modal");
                    btnDelete.setAttribute("data-target", "#deleteProductModal");
                    let btnTd = row.insertCell(3);
                    btnTd.appendChild(btnEdit);
                    btnTd.appendChild(btnDelete);
                }
            })
    }
    

    
    return (
        <div>
            <div className="navbar-fixed-top">
        <Header/>
    </div>
    <CreateButton url={'/product/create'}/>
    <div className="navbar-fixed-bottom">
        <Footer/>
    </div>
    <div className="table-wrapper">
      <div className="tabela">
      <table className="table table-striped border datatable" style={{borderCollapse: 'collapse'}}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody id="product-table">
          <tr className="align-middle">
          </tr>
        </tbody>
      </table>
      </div>
    </div>

      <div className="modal" id="deleteProductModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title title-delete">Excluir</h5>
            </div>
            <div className="modal-body">
              <p className="text-delete">Deseja realmente excluir este produto do catálogo?</p>
            </div>
            <div className="modal-footer">
              <button id="product-btn-delete" type="button" className="btn btn-danger">Excluir</button>
              <button type="button" className="btn btn-success" data-dismiss="modal">Voltar</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}

export default ProductCatalog;