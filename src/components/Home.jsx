import Navbar from './Navbar'
import brabu from '../assets/Brabu.png'
import linkedin from '../assets/linkedin.png'
import gmail from '../assets/gmail.png'
import leetcode from '../assets/LeetCode.png'
import gif from '../assets/gif.gif'
import Contact from '../components/Contact'
function Home(){
    return(
        <>
        <Navbar/>
        <div className="home-div">
             <img src={brabu} alt="Brabu" className="brabu-img" />
            
             <div className="brabu-intro">
                <h1 className="brabu-name">Brabu M</h1>
                    A final-year B.E. Computer Science and Engineering student and aspiring 
                    Full Stack Developer. I enjoy building responsive web 
                    applications using React.js, Node.js, Express.js, and 
                    MongoDB. I’m passionate about learning new technologies, solving 
                    problems, and turning ideas into practical web solutions.
             </div>
        </div>
        <div className="home-gif-div">
           <img src={gif} className='img-gif'></img>
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
     <Contact/>  
     </>
    )
}
export default Home