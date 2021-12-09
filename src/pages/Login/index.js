import "./styles.css"
import { useNavigate } from "react-router";
import { useRef } from "react";

const Login = () => {
    const navigate = useNavigate();

    const emailRef = useRef();
    const passwordRef = useRef();
    const userAuth = (event) => {
        event.preventDefault();
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAU-4rLBgoJiYH3xNUW8Pycg6QT4gOibTQ", {
          method: "POST",
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
            returnSecureToken: true,
          }),
        }).then((res) => res.json())
        .then(data => {
          if(data.localId) {
            localStorage.setItem('userId', data.localId);
            navigate('/main');
          } else{
            alert("As informações inseridas são insuficientes ou inválidas.")
          }
        })
    };

    return (
        <div style={{backgroundImage: `url("https://media.discordapp.net/attachments/634833782909960192/918273343210266635/background-login.jpg?width=855&height=559")`}}>
            <div className="page">
    <div className="page-content">
    <div className="logo">
      <img src={"https://cdn.discordapp.com/attachments/634833782909960192/918273343868784650/logo.png"} alt="Logo"/>
    </div>  


    <h1 className="title-login">Login</h1>

    <form className="form-login" id="form-login" onSubmit={userAuth}>
        <div className="mb-3 input-login-div">
          <label className="form-label login-label-input-email">Email</label>
          <input className="form-control input-login-email" ref={emailRef} id="form-login-email" type="email" placeholder="Ex: marcos@sparkyproduct.com.br" required/>
        </div>
        <div className="mb-3 input-login-div">
          <label className="form-label login-label-input-senha">Senha</label>
          <div className="input-password-login-icon">
          <input className="form-control input-login-password" ref={passwordRef} id="form-login-password" type="password" placeholder="Senha" required/>
        </div>
        </div>
        <div className="input-login-div-btn">
          <button className="btn btn-success btn-login" type="submit">Entrar</button>
          <button type="button" className="btn btn-primary btn-cadastro" onClick={() => navigate('/register')}>Cadastrar</button>
        </div>
      </form>
    </div>
    </div>
        </div>
    );
}

export default Login;