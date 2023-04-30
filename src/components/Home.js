import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillInstagram,AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>
      <div className='home' id="home">
        <main>
          <h1>Future Tech</h1>
          <p>Solution To All The  Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>We are one and only solutions to your
            tech problems you face everyday.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>TechStar is a technology IT Company
            Which is Found in 2022 century
            and has net value of 20cr. <br />
           <br /> Ceo and the Director of this Company is Nishant Lugun <br />
            <br /> For Futher information Sign in & Join us. </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div style={{animationDelay:"0.3s"}}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{animationDelay:"0.5s"}}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{animationDelay:"0.7s"}}>
              < AiFillInstagram/>
              <p>Instagram</p>
            </div>
            <div style={{animationDelay:"0.9s"}}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Home