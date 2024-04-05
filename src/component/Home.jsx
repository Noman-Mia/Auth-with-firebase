import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const Home = () => {
    const user = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <p className="text-center">Home</p>
        </div>
    );
};

export default Home;