import {useNavigate} from "react-router";

const Contact = () => {
    document.title = "Contact";
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }
    return(
        <>
            <h1>
                Contact Page
            </h1>
            <button onClick={handleClick}>Go Home</button>
        </>


    )

}

export default Contact