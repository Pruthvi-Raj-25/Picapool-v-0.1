import React from "react";
import "./Home1.css";
import Illustration32 from "./assets/Illustration32.png";
import Illustration from "./assets/Illustration7.png";
import Illustration32l from "./assets/Illustration32l.png";
import GooglePlayIcon from "./assets/google_play.png";
import AppStoreIcon from "./assets/en-us.svg";
import manymore from "./assets/andmanymore.png"
import readmore from "./assets/readmore.png"
import image from "./assets/img4.png"
import img from "./assets/img3.png"
import image3 from "./assets/image 3.png";
import image4 from "./assets/image 4.svg";
import image5 from "./assets/image 5.svg";
import pizza from './assets/pizza.png'
import offer from './assets/offer.png'
import sc1 from './assets/ph1.png'
import sc2 from './assets/SC2.png'
import sc3 from './assets/ph3.png'
import num1 from './assets/num1.png'
import num2 from './assets/num2.png'
import num3 from './assets/num3.png'
import trophy from './assets/trophy.png'


const Home = () => (
  <>
    <div className="body">
      <div className="first-container">
        <div className="text-contain-1">
            <div className="text1">Save More with</div>
            <div className="text2">Picapool</div>
            <div className="text3">
                Pool offers for cabs, pizzas, clothes, and more...
            </div>
            <div className="text4">Download the App and start pooling :)</div>
            <div className="download-buttons">
                <div className="rectangle-animation">
                    <img src={GooglePlayIcon} width={150} alt="Get it on Google Play" />
                </div>
                <div className="rectangle-animation">
                    <img src={AppStoreIcon} alt="Download on the App Store" />
                </div>
            </div>
            {/* </div> */}
        </div>
        <div className="circle">
            <img src={Illustration32} alt="man using app"/>
        </div>
      </div>
      <div className="full-line">Why<span className="orange">Picapool ?</span></div>
      <div className="second-container">
        <div className="image-contain">
          <div className="random-container">
          <div className="trapezium-left"></div>
          <div className="images">
            <img src={image4} height={300}/>
            <img src={image5} height={180}/>
          </div>
          </div>
        </div>
        <div className="text-contain-right">
            <div className='heading'>Share a Ride and Save!</div>
            <div className='simple'>Share your journey, cut your costs! Find fellow travelers heading your way.</div>
            <div className='simple'>Easily connect with others to split the fare and make commuting fun.</div>
            <div className="image-contain">
                <img src ={image3} width={350} alt="cabsharing"/>
            </div>
        </div>
      </div>
      <div className="first-container">
        <div className="text-contain">
            <div className='heading'>Slice the Price of Your Pizza!</div>
            <div className='simple'>Double the toppings, half the price! Pool your pizza order and enjoy more.</div>
            <div className='simple'>Team up with nearby pizza lovers for a delicious deal</div>

          <div className="image-contain">
            <img src={pizza} alt="pizzapic"/>
          </div>
        </div>
        <div className="random-container">
        <div className="trapezium-right">
          {/* trapezium text */}
        </div>
          <div className="images">
            <img src={image} height={280}/>
            <img src={img} height={400}/>
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="random-container">
          <div className="trapezium-left">
          </div>
          <div className="images">
            <img src={img} height={400}/>             
            <img src={image} height={280}/>
          </div>
        </div>
        <div className="text-contain-right">
        <div className='heading'>Create Your Own Pool</div>
         <div className='simple'>Got a great deal? Snap a picture and find someone nearby to share it with</div>
         <div className='simple'>Whether it's a sale, a special offer, or a unique find, create a pool and enjoy the savings together</div>
          <div className="image-contain">
            <img src={Illustration32l} alt="left" />
            <img src={offer} alt="center" />
            <img src={Illustration32} width={200} alt="right" />
          </div>
        </div>
      </div>
      <div className="test">
        <img src={manymore} />
      </div>
      {/* <div className="full-line">and many more</div> */}
      <div className="hed">How does it 
        <span className="orange">
          Work?
        </span> 
      </div>
      <div className="number">
        <img src={num1} />
        <div className="hr"></div>
        <img src={num2} />
        <div className="hr"></div>
        <img src={num3} />
      </div>
      <div className="flex-container">
        <div className="box-contain">
          <div className="text1">CHOOSE</div>
          <div className="text1"> A DEAL</div>
          Select from a variety of pooling options
          <img src={sc1} />
        </div>
        <div className="box-contain">
          <div className="text1">JOIN A</div>
          <div className="text1">POOL</div>
          Connect with like minded savers nearby
          <img src={sc2} />
        </div>
        <div className="box-contain">
          <div className="text1">ENJOY</div>
          <div className="text1"> REWARDS</div>
          Complete the deal and enjoy your savings!
          <img src={sc3} />
        </div>
      </div>
      <div className="hed">Video 
        <span className="orange">
          Guide
        </span>
      </div>
      {/* <iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe> */}
      <div className="video-container">
        <iframe width="960" height="500" src="https://www.youtube.com/embed/zHCuyB13UoU?si=BYqutODGST4i1_4C" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="hed">We are</div>
      <div className="hed-1">
        <span className="blue">
          Suzuki 
        </span>Innovation Bootcamp 
        <span className="orange">
          Winner
        </span>
        <img src={trophy} alt="trophy" />
      </div>
      <div className="first-container">
        <div className="text-contain">
          <li>
            Winning the Suzuki Innovation Bootcamp validated our unique approach
          </li>
          <li>
            This prestigious recognition reinforced our belief in using
            technology to empower users
          </li>
          <li>
            It showcased our potential to revolutionize traditional savings
            methods.
          </li>
          <li>
            Our innovative approach is now industry-recognized and celebrated.
          </li>
          <img src={readmore} alt="read more->" />
        </div>
        <div className="image-contain">
          <img alt="relaveant" />
        </div>
      </div>
      <div className="first-container">
      <div className="text-contain-1">
            <div className="hed">
            Get started with Picapool
            </div>
            <div className="text4">Download the App Today and Start Saving!</div>
            <div className="download-buttons">
                <div className="rectangle-animation">
                    <img src={GooglePlayIcon} width={150} alt="Get it on Google Play" />
                </div>
                <div className="rectangle-animation">
                    <img src={AppStoreIcon} alt="Download on the App Store" />
                </div>
            </div>
        </div>
        <div className="circle">
            <img src={Illustration} alt="man using app"/>
        </div>
      </div>
    </div>
  </>
);
export default Home;
