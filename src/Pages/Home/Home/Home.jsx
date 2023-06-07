import Classes from "../../Classes/Classes";
import Instructor from "../../Instructor/Instructor";
import Reviews from "../../Reviews/Reviews";
import Banner from "../Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Classes></Classes>
            <Instructor></Instructor>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;