
import './App.css';
import main from "./images/main.png"
import satisfaction from "./images/satisfaction.png"
import tickmark from "./images/tickmark.png"
import coffee from "./images/coffee.png"
import thumbnail from "./images/thumbnail.png"
import delivery from "./images/delivery.png"
import fb from "./images/icons/fb.png"
import tw from "./images/icons/tw.png"
import yt from "./images/icons/yt.png"
import li from "./images/icons/li.png"



function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="h-left">
          Alba Helpline: 04829 222776
        </div>
        <div className="h-right">
          <span>Register</span>
          <span>Login</span>
        </div>

      </header>
      <nav className='navbar'>
        <div className="nav-left">
          <a href="#">Logo</a>
        </div>
        <div className="nav-middle">
          <a href="#">HOME</a>
          <a href="#">MEN</a>
          <a href="#">WOMEN</a>
          <a href="#">GIRLS</a>
          <a href="#">BOYS</a>
        </div>
        <div className="nav-right">
          <i class="fas fa-search"></i>
          <i class="fas fa-shopping-cart"></i>
        </div>
      </nav>
      <div className="about">
        <i class="fas fa-home"></i>
        <span>About Us</span>
      </div>
      <div className='main'>
        <h1>Happiness Is Our Culture</h1>
        <p>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
        <img src={main} alt="working-man" />
      </div>
      <div className="article">
        <div className='a-left'>
          <img src={satisfaction} alt="employee-group" />
        </div>
        <div className="a-right">
          <h2>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</h2>
          <div className='points'>
            <img src={tickmark} alt="tickmark" />
            <p>Listen to them. We give opportunities for them to express their views- personal and official.</p>
          </div>
          <div className='points'>
            <img src={tickmark} alt="tickmark" />
            <p>Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.</p>
          </div>
          <div className='points'>
            <img src={tickmark} alt="tickmark" />
            <p>Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.</p>
          </div>
          <div className='points'>
            <img src={tickmark} alt="tickmark" />
            <p>The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.</p>
          </div>
          <div className='points'>
            <img src={tickmark} alt="tickmark" />
            <p>Timely Financial assistance is rendered as a part of employee welfare scheme as and when required.</p>
          </div>

        </div>
      </div>
      <div className="sub-article">
        <div className="sa-left">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.</p>

          </div>
          <div className="coffee">
            <img src={coffee} alt="coffee" />
          </div>
        </div>
        <div className="sa-right">
          <div className="mission">
            <h3>Our Mission</h3>
            <h5>Our mission is to put in effort wholeheartedly to:</h5>
            <ul>
              <li>Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.</li>
              <li>Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.</li>
              <li>Share part of the profit to ensure the welfare of the employees, society & the environment.</li>

            </ul>

          </div>
        </div>
      </div>
      <div className="corporate">
        <h2>Corporate Info</h2>
        <div className='history'>
          <h4>History</h4>
          <p>Alba Clothings started its production in the year 1994 at Vaikom, Kottayam District, Kerala. In a span of 25 years, it is our relentless faith with dedicated effort, focused on success, holding tightly on to business ethics and values that enabled Alba Clothings to soar to make a definite mark in the Textile Industry. The impeccable product quality has always ensured customer satisfaction which has emarkably promoted ALBA brand to reach to the present stage.</p>
          <p>By 2019, over a period of 25 years, ALBA could spread its wings over the Kerala Textile Industry, a part of Tamil Nadu and the Middle-East by acquiring a considerable market share in the innerwear segment. Now ALBA has become a popular Brand. High quality ALBA products are currently available in considerably a good number of Retail outlets in Kerala, Tamil Nadu & in the Middle-Easy at an affordable price.</p>
          <p>ALBA Registered Offices are located in Vaikom & Irumpanam, Kerala and Tirupur, Tamil Nadu. And Warehous is located in Vaikom, Kerala and the production units are based in Tirupur, Tamil Nadu. The production is being carried out in about 14 leading stitching units with International Standards and expertise under stringent quality control.</p>
        </div>

        <div className="brand">
          <h4 className="brand">Why The Brand Name Alba?</h4>
          <p>Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.</p>
        </div>
        <div className="brand">
          <h4 className="brand">Why The Brand Name Alba?</h4>
          <p>Alba is a given name of Latin origin meaning ‘white’. In Spanish and Italian the name means ‘Sunrise’. Sunrise indicates light, freshness, warmth and closeness. Among our garments the innerwear is the closest to our body. It gives the freshness, warmth, comfort and confidence for a fresh start. And we also intent the brand name Alba to stay in the minds of our customers as a simple and memorable experience.</p>
        </div>

      </div>
      <div className="video-thumbnail">
        <img src={thumbnail} alt="video-thumbnail" />
      </div>
      <footer className='footer'>
      <div className='wrapper'>
          <div className="logo">
            <img src={delivery} alt="delivery-logo" />
            <p>Fast delivery in 3-5 Days</p>
          </div>
          <div className="links">
            <h6>QUICK LINKS</h6>
            <p>Gift Card</p>
            <p>Lookbook 2021</p>
            <p>Privacy Policy</p>
            <p>Shipping & Refund</p>
          </div>
          <div className="company">
            <h6>COMPANY</h6>
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Pricing Plan</p>
            <p>Knowledge Base</p>
          </div>
          <div className="newsletter">
            <h6>NEWSLETTER</h6>
            <p>Sign up & get all our latest updates and special offers</p>
            <input type="email" placeholder='   Enter Your Email address' />
            <button>SUBSCRIBE</button>
            <div className="icons">
              <img src={yt} alt="youtube-icon" />
              <img src={li} alt="linkedin-icon" />
              <img src={tw} alt="tritter-icon" />
              <img src={fb} alt="facebook-icon" />
  
            </div>
            
          </div>
      </div>
        
        <div className="copyright">
       
          <p >© 2021 Alba. All Rights Reserved.</p>
        </div>
       

      </footer>
      
     
    </div>
  );
}

export default App;
