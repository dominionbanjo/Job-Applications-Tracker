import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            illum dolores inventore veritatis ratione totam blanditiis
            voluptatum illo, voluptatibus iure porro repellat eveniet quis?
            Ducimus natus nostrum voluptatum iure voluptas rerum culpa illum ab
            eligendi sequi dolorem est, cupiditate cumque doloremque
            necessitatibus atque suscipit, minus vel corporis, maxime alias!
            Incidunt?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn register-link">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
