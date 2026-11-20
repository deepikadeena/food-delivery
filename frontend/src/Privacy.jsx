import React from 'react'
import { assets } from './assets/assets'
import './Privacy.css'
import Card from 'react-bootstrap/Card';

const Privacy = () => {
  return (
    <div className='container'>
        <img className='type' src={assets.back5} alt="" />
        <h1 className='re'>REFUND AND PRIVACY POLICY</h1>
        <div>
             <Card className='pri'>
           <Card.Body>
            <Card.Title className='tit'>Applicability and Scope</Card.Title>
            <div className='ete'>
             <p>Eternal Limited (Formerly known as SpicySpot Limited) and/or its affiliates (“Eternal”, <br /> "Zomato," the "Company," "we," "us," and "our,") respect your privacy and are committed to <br /> protecting it. This policy describes:</p><br />
             <li>the types of information that Eternal may collect from you when you access or use its websites, applications and other online services (collectively, referred as “Services”); and</li>
             <li>its practices for collecting, using, maintaining, protecting and disclosing that information.</li><br />
             <p>This policy does not apply to information that you provide to, or that is collected by, any third-party, such as restaurants at which you make reservations and/or pay through Eternal Services and social networks that you use in connection with its Services. Eternal encourages you to consult directly with such third-parties for information about their privacy practices.</p><br />
             <p>Please read this policy carefully to understand Eternal’s policies and practices regarding processing of your information. By accessing or using Eternal’s Services and/or registering for an account with Eternal or any of its affiliates, you agree to this privacy policy and you provide your informed consent to the collection, use, disclosure, retention, and protection of your personal information as described here. If you do not provide the information Eternal requires, Eternal and its platforms may decline to provide Services to you.</p><br />
             <p>𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐛𝐥𝐞 𝐀𝐠𝐞: By using the Services, you represent and warrant that you are either at least 18 years of age or have the express permission of a parent or legal guardian to use the Services. If you are a parent or legal guardian of a minor who uses the Services, you are fully responsible for their use of the Services, including any legal liability they may incur.</p><br />
             <p>𝐒𝐜𝐨𝐩𝐞: This Privacy Policy outlines Eternal and its affiliates' practices regarding the processing of personal information concerning individuals engaging with our Platform and Services. This applies comprehensively to customers, merchant partners, delivery / service partners, users of our digital platforms (websites and applications), participants in events facilitated by Eternal, and personnel including employees,contractors, interns and third parties.</p><br />
             <h2 className='info'>Information You Provide to Us</h2> <br />
             <li>𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧: Name, address, email address, postal code, password and other information you may provide with your account, such as your gender, mobile phone number, date of birth, anniversary date, user bio, nationality and website. This also includes your profile picture that will be publicly displayed as part of your account profile. You may optionally provide us with this information through third-party sign-in services such as Facebook and Google. In such cases, we fetch and store whatever information is made available to us through these sign-in services.</li><br />
             <li>𝐘𝐨𝐮𝐫 𝐜𝐨𝐧𝐭𝐞𝐧𝐭: Information you provide through our Services, including your reviews, photographs, comments, lists, followers, the users you follow, current and prior restaurant reservation details, food ordering details and history, favourite restaurants, special restaurant requests, contact information of people and other information you provide on our Services, and other information in your account profile.By providing information of a third-party individual (such as for placing orders on behalf of someone else) you confirm that you have such individual’s consent to share their personal information with Eternal.</li><br />
             <li>𝐘𝐨𝐮𝐫 𝐛𝐨𝐨𝐤𝐢𝐧𝐠𝐬 𝐚𝐧𝐝 𝐩𝐫𝐞𝐟𝐞𝐫𝐞𝐧𝐜𝐞𝐬: Further, any information provided by you directly while utilising the Services will also be collected by us. This includes details related to events you book, attend, or express interest in via our Services (such as District), including ticket types, seat preferences, attendance confirmations, event feedback, specific event-related preferences (e.g., accessibility needs volunteered by you), and any information shared when interacting with event organizers or venues through our platform. We may also record dietary preferences or restrictions, cuisine preferences, preferred price points, occasion types (e.g., birthday, anniversary) and any data you input or actions you take while interacting with specific features, such as providing travel details (such as train PNR), event booking data, loyalty program participation, or preferences selected within any Service.</li><br />
             <li>𝐘𝐨𝐮𝐫 𝐚𝐜𝐭𝐢𝐯𝐢𝐭𝐢𝐞𝐬: The search terms you have looked up and results you selected, how long you used our Services and which features you used; the ads you clicked on.</li>
             
             
                <h3 className='refund' >Refund Policy</h3>
                <p className='at' >At Freshmenu, we are committed to providing you with the highest quality food and service. However, we understand that there may be occasions when you need to return an item or request a refund. Our refund policy is designed to ensure that you are satisfied with your purchase.</p>
                <h2 className='refund'>Eligibility for Refunds</h2>
                <p>Refunds may be issued in the following circumstances:
                   If you received a damaged, defective, or incorrect item
                   If the food quality was unsatisfactory
                   If there was an error in order processing
                   If you experienced service issues that significantly impacted your order</p>
                   <h3 className='refund'>Refund Process</h3>
                   <p>Once we receive your refund request, our customer service team will review it and respond within 48 hours. If your request is approved, the refund will be processed to your original payment method within 5-7 business days.</p>
             </div>
        </Card.Body>
    </Card>
        </div>
      
    </div>
  )
}

export default Privacy
