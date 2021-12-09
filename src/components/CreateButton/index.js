import "./styles.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

const CreateButton = ({url}) => {
    const navigate = useNavigate();

    return (
        <div className="btn-float-create" onClick={() => navigate(url)}>
        <div className="btn-float-div">
        <Link to={url} className="float">
          +
        </Link>
        </div>
        </div>
    );
}

export default CreateButton;