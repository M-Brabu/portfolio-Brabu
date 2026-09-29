import brabu from '../assets/Brabu.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import leetcode from '../assets/leetcode.png'
function Home(){
    return(
        <>
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
            <img src={linkedin} alt="linkedin" className="contact-img" ></img> 
           <img src={gmail} alt="gmail" className="contact-img" ></img>
           <img src={leetcode} alt="leetcode" className="contact-img" ></img>
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