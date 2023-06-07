import Classes from "../../Classes/Classes";
import Instructor from "../../Instructor/Instructor";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructor></Instructor>
        </div>
    );
};

export default Home;