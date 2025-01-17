import "./Custom.css"
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import { GiReceiveMoney } from 'react-icons/gi';
import { Link } from "react-router-dom";

function Home(){
  return (
    <> 
      <Navbar />

      {/* SLIDER */}
      <div className="carousel">
        <div className="carousel-inner">
          <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden defaultChecked="checked" />
          <div className="carousel-item">
             <img src="/ReactEvento/images/neon001.gif" alt="wait" ></img>
          </div> 
          <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
             <img src="/ReactEvento/images/neon002.gif" alt="wait" ></img>
          </div>
          <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden />
          <div className="carousel-item">
             <img src="/ReactEvento/images/neon003.gif" alt="wait" ></img>
          </div>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
          <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
          <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
          <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
          <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
          <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
          <ol className="carousel-indicators">
            <li>
              <label htmlFor="carousel-1" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-2" className="carousel-bullet">•</label>
            </li>
            <li>
              <label htmlFor="carousel-3" className="carousel-bullet">•</label>
            </li>
          </ol> 
           </div>
      </div>
      <div className="bg_img"  >
        <div class="typewriter">
          <h1 className="head_text"> Book your events</h1>
        </div>
        <br></br>
        <p> Join and participate in events near by you </p>
        <Link to="/signup"> <button style={{fontSize:"20px"}} className="custom-btn btn-2" >JOIN</button></Link>
      </div>
 

      <Cards />

      {/* FIRST */}
      <div className="div-cool-container">
        <div className="img-cool1">
          <img alt="Party" src="./ReactEvento/images/Party1.jpeg" className="img-inside" /></div>

        <div className="div-cool">
          <h1 className="heading">Nearby Concert</h1>
          <div className="size">
            <p className="para" align="justify">Organizer approved by us, for more information please read our
              policy In corporate finance and capital markets, refunding is the process where a fixed-income issuer retires some of their outstanding callable bonds and replaces them with new bonds, usually at more favorable terms to the issuer as to reduce financing costs. The new
              bonds are used to create a sinking fund to repay the original bond issues, known as refunded bonds.</p>
          </div>
        </div>
        <br />  <br /> <br />

        {/* SECOUND */}
        <div className="txt2-box"><p></p>

          <button className="custom-btn btn-2">Read More</button>
          <div className="div-cool2">
            <h1 className="heading">Gaming</h1>
            <p className="para2" align="justify">Online gaming events of your favorite games </p>
          </div>
          </div>

        <img alt="Game console" src="./ReactEvento/images/Gaming.jpg" className="img-cool2" />


        {/* THIRD */}
        <br /> <br /> <br /> <br /> <br /> <br /> <br/>   
        <div className="img-cool1">
          <img alt="Party" src="./ReactEvento/images/Party.jpg" className="img-inside" /></div>
        <div className="div-cool3">
          <h1 className="heading">Refundable <GiReceiveMoney /></h1>
          <div className="size">
            <p className="para" align="justify">Your money will be refuned Immediately In corporate finance and capital markets, refunding is the process where a fixed-income issuer retires some of their
              outstanding callable bonnds and replaces them with new bonds, usually at more favorable terms to the issuer as to reduce financing costs. The new bonds are used to create a sinking
              fund to repay the original bond issues, known as refunded bonds.</p>
          </div>
        </div>
        <div className="line-container">
          <div className="line"></div>
         </div> 
      </div>




      <Footer/>
    </>
  )
}

export default Home;