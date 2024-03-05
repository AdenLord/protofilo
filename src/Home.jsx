import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return ( 
        <div className="home">
        <h1 className="animeBox">Hello World!</h1>
        <p className="animeBox-S">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus sint, aspernatur non quo quia laudantium.</p>
        <input onClick={ () => navigate('/abuot me') }  className="m-btn animeBtn" type="button" value="About me" />
        </div>

     );
}
 
export default Home;