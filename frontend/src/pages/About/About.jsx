import React from 'react'
import './About.css'
import Card from 'react-bootstrap/Card';
import { assets } from '../../assets/assets';

const About = () => {
  return (
    <div>
        
      <img className='img' src={assets.back1} alt="" />
      <h3 className='sp'>𝙎𝙥𝙞𝙘𝙮𝙎𝙥𝙤𝙩</h3>
      <p className='be'>𝘽𝙚𝙩𝙩𝙚𝙧 𝙛𝙤𝙤𝙙 𝙛𝙤𝙧 𝙢𝙤𝙧𝙚 𝙥𝙚𝙤𝙥𝙡𝙚</p>
      <div className='head'>
        <h1 className='about'>Aboutus</h1>
        <p className='para'>Founded in 2020, SpicySpot has transformed the <br /> way millions of people discover and enjoy food. <br /> What began as a simple search and discovery <br /> platform has grown into a comprehensive food- <br />tech ecosystem that connects consumers, <br /> restaurants, and delivery partners across <br /> India.</p>
         <img className='del' src={assets.back2} alt="" />
         <p className='paras'>At its core, SpicySpot is driven by a singular <br /> mission: Better food for more people. Through <br /> innovative technology, deep local insights, and <br /> a relentless focus on customer experience, <br /> SpicySpot is reshaping the food landscape one <br /> meal at a time.</p>
      </div>
      <div>
        <h1 className='fue'>Fueling connections through every order</h1>
         <Card className='ca'>
      <Card.Img className='cas' variant="top" src={assets.phone}/>
      <Card.Body>
        
        <Card.Text className='mil'>
          24 million+ <br />customers <br />
         use the app monthly
        </Card.Text>
        </Card.Body>
    </Card>
     <Card className='caa'>
      <Card.Img className='cass' variant="top" src={assets.back3}/>
      <Card.Body>
        
        <Card.Text className='mil'>
          3000+  restaurants <br />
serviced by spicyspot
        </Card.Text>
        </Card.Body>
    </Card>
     <Card className='caaa'>
      <Card.Img className='casa' variant="top" src={assets.back4}/>
      <Card.Body>
        
        <Card.Text className='mil'>
          500,000+ delivery <br /> partners earn their <br /> livelihood
        </Card.Text>
        </Card.Body>
    </Card>
      </div>
    </div>
   
  )
}

export default About
