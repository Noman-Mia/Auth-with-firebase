import { useContext } from "react";
import { authContext } from "./AuthProvider";


const Home = () => {
    const user = useContext(authContext)
    console.log(user);
    return (
        <div>
            <p className="text-center">Home</p>
        </div>
    );
};

export default Home;