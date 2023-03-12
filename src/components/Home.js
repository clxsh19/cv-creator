import './Home.css'
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div class="home-body">
		<div class="super-title">Fast. Easy. Effective.</div>
		<div class="intro-body">
		  Online Cv Maker <br></br>
		  Create a Simple CV In<br></br> 
		  Our App for free
		</div>
		<div class="intro-desc">
		One sheet of paper decides whether you get the job. Easy to create and<br></br>
		with option to download your cv as pdf.
		</div>
		<Link to="/form/info" className="create-btn"> 
          CREATE YOUR CV NOW
        </Link>
        <div className="side-img"></div>
		</div>
	)
}

export default Home;

