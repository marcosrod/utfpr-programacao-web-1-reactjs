import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./styles.css"

const MainPage = () => {
    return (
        <div style={{height: '87vh', backgroundImage: `url("https://cdn.discordapp.com/attachments/634833782909960192/918273344233668628/background-index.jpg")`}}>
            
    <div class="navbar-fixed-top">
        <Header/>
    </div>

    <h1 class="title-index">Seja Bem Vindo(a) ao Sparky Product</h1>

    <div class="navbar-fixed-bottom">
        <Footer/>
    </div>
        </div>
    );
}

export default MainPage;