import { useContext } from "react";
import { AuthContext } from "../Navbar/Porvider/AuthProvider";


const Home = () => {

    const authInfo = useContext(AuthContext)
    console.log(authInfo);
    return (
        <div>
            
            <h1>this is home componant {authInfo.name}</h1>
        </div>
    );
};

export default Home;