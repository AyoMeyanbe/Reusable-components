import logo from './logo.svg';
import './App.css';
import Greet from './components/Greetings';
import ProfileCard from './components/ProfileCard';
import AlexaImage from './images/alexa.png'
import SiriImage from './images/siri.png'
import CortanaImage from './images/cortana.png'

function App() {
  const name = "Ayo";
  return (
    <>
    <div className="App">
      <Greet name ={name}/>
    </div>

    <div>
      <h3>Personal Assistance</h3>
    </div>

    <div className='container'>
      <ProfileCard
      title='Alexa'
      handle='@alexa123'
      image={AlexaImage}
      description="Alexa lorem ipsum dolor sit"
      />
      <ProfileCard
      title='Siri'
      handle='@siri'
      image={SiriImage}
      description="Siri lorem ipsum dolor sit"
      />
      <ProfileCard
      title='Cortana'
      handle='@cortana334'
      image={CortanaImage}
      description="Cortana lorem ipsum dolor sit"
      />
    </div>
    </>
  );
}

export default App;
