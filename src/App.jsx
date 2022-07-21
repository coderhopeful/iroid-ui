
import './App.css';
import main from "./images/main.png"
import satisfaction from "./images/satisfaction.png"
import tickmark from "./images/tickmark.png"
import coffee from "./images/coffee.png"

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
    </div>
  );
}

export default App;
