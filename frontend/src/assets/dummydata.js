import { FiMail, FiPhone, FiUser } from "react-icons/fi";

export const contactFromFields = [
    {lable:'Full Name',name:'name',type:'text',Placeholder:'Enter your full name',Icon: FiUser},
    {lable:'Phone Number',name:'phone',type:'cel',Placeholder:'+91 1234567890',pattern:"[+]{0,1}[0-9]{10,13}",Icon: FiPhone},
    {lable:'Email Address',name:'email',type:'email',Placeholder:'your.email@example.com',Icon:FiMail}
    


];