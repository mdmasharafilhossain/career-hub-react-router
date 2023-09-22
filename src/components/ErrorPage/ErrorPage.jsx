import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center mx-auto my-auto">
            <h2>404 Not Found!!!!!</h2>
            <Link to="/"><button className="btn">Go back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;