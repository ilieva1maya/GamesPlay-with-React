import { useContext } from "react"
import AuthContext from "../../contexts/authContext"
import { Navigate } from "react-router-dom";
import Path from "../../paths";

// или*
// import { useNavigate } from "react-router-dom";

export default function BaseAuthGuard(props) {
    const { isAuthenticated } = useContext(AuthContext);
    // или*
    // const navigate = useNavigate();

    if (!isAuthenticated) {
        return <Navigate to={Path.Login}/>
        // или*
        // navigate(Path.Login);
        // return null;
    }

    return (
        <>
        {props.children}
        </>
    )
}