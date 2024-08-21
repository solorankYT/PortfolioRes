import { Container } from 'react-bootstrap';
import './AboutSection.css'
function AboutMe(){
    return(
        <>
        <Container className="containerMe" >
        
        <h1 className="text-white">About me</h1>
        <p className="AboutText text-color-secondary">
        an aspiring Front-End Developer with a growing interest in web development. I'm just starting out, but I'm eager to learn and improve my skills. 
        <span className="text-color-primary"> I enjoy working on creating interactive and user-friendly web applications, and I'm continuously learning to deliver better and more visually appealing projects. 
        </span> While I have much to learn, I'm committed to growing in this field and staying updated with the latest trends and technologies. 
        My goal is to keep improving and, hopefully, contribute to projects that meet or exceed expectations.
        </p>   

        <a className="link-design" href="./MarkFunaResume.docx" download>
        <div className="mt-4 button "><span>Download CV </span></div>
        </a> 
    
        </Container>
        </>
    );
}

export default AboutMe