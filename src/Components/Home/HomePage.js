import { Link } from "react-router-dom";
import '../../Styles/Home.scss';

function HomePage() {
  return (
    <div className="HomePage">
        <div className="Navbar">
          <p className="Header">Home Page</p>
            <div className="Link">
              <Link className="LinkHome" to="/">Home</Link>
              <Link className="LinkUnits" to="/units">Units</Link>
            </div>
        </div>
        

        <div className="Image">
          <img src={require('../../assets/images/age-of-empires.png')} alt="Age of Empires"  width="1000" height="500" />
        </div>

    </div>
  );
}

export default HomePage;
