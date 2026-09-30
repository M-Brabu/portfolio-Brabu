import Navbar from './Navbar'
import brabu from '../assets/Brabu.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import leetcode from '../assets/LeetCode.png'
function Home(){
    return(
        <>
        <Navbar/>
        <div className="home-div">
             <img src={brabu} alt="Brabu" className="brabu-img" />
             <div className="brabu-intro">
                    Hi, I’m Brabu, a final-year B.E. Computer Science and Engineering student and aspiring 
                    Full Stack Developer. I enjoy building responsive web 
                    applications using React.js, Node.js, Express.js, and 
                    MongoDB. I’m passionate about learning new technologies, solving 
                    problems, and turning ideas into practical web solutions.
             </div>
        </div>
        <div className="contact-div">
           <a href="www.linkedin.com/in/brabu-murugan-a7a15b297">
             <img src={linkedin} alt="linkedin" className="contact-img" ></img> 
           </a>
           <a href="mailto:brabumurugan18@gmail.com">
            <img src={gmail} alt="gmail" className="contact-img" ></img>
           </a>
           <a href="https://leetcode.com/u/Brabu/">
             <img src={leetcode} alt="leetcode" className="contact-img" ></img>
           </a>
        </div>
        <hr />
        <div className="batp-div">
           <p>email : brabumurugan18@gmail.com</p>
           <p>Brabu@Portfolio</p>
        </div>
        </>
    )
}
export default Home