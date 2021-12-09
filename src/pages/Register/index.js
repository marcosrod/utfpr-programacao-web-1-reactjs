import "./styles.css"
import { useNavigate } from "react-router";
import { useRef } from "react";

const Register = () => {
    const navigate = useNavigate();
    
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const saveNewUserInfo = (id) => {
        fetch("https://sparkyproduct-default-rtdb.firebaseio.com/user.json", {
          method: "POST",
          body: JSON.stringify({
            id: id,
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }).then((res) =>
          res.ok
            ? alert('Cadastrado no firebase!')
            : alert("As informações inseridas são insuficientes ou inválidas.")
        );
      };
      
      const addNewUser = async (event) => {
        event.preventDefault();
        const res = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAU-4rLBgoJiYH3xNUW8Pycg6QT4gOibTQ",
          {
            method: "POST",
            body: JSON.stringify({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const userData = await res.json();
        saveNewUserInfo(userData.localId);
      };

    return (
        <div style={{backgroundImage: `url("https://media.discordapp.net/attachments/634833782909960192/918273343210266635/background-login.jpg?width=855&height=559")`}}>
            <div className="page">
    <div className="page-content">
    <div className="logo">
      <img src={"https://cdn.discordapp.com/attachments/634833782909960192/918273343868784650/logo.png"} alt="Logo"/>
    </div>  

    <h1 className="title-register">Nova Conta</h1>

    <form className="form-register" id="form-register" onSubmit={addNewUser}>
        <div className="mb-3 input-register-div">
            <label className="form-label">Nome</label>
            <input className="form-control input-register-nome" ref={nameRef} id="form-register-name" type="text" placeholder="Ex: Marcos Rodrigo" required/>
          </div>
        <div className="mb-3 input-register-div">
          <label className="form-label">Email</label>
          <input className="form-control input-register-email" ref={emailRef} id="form-register-email" type="email" placeholder="Ex: marcos@sparkyproduct.com.br" required/>
        </div>
        <div className="mb-3 input-register-div">
          <label className="form-label">Password</label>
          <div className="input-password-login-icon">
            <input className="form-control input-register-password" ref={passwordRef} id="form-register-password" type="password" placeholder="Senha" required/>
          </div>
        </div>
        <div className="input-register-div-btn">
          <button className="btn btn-success btn-cadastro-confirmar" type="submit">Confirmar</button>
          <button type="button" className="btn btn-primary btn-cadastro-voltar" onClick={() => navigate('/')}>Voltar</button>
        </div>
      </form>
    </div>
    </div>
  </div>
    );
}

export default Register;