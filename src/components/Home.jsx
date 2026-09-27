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
                I'm Brabu M Final Year Computer Science Student
                at university college of engineering nagercoil
                passionate about web developement and always open to 
                learn about new technologies
             </div>
        </div>
        <div className="contact-div">
            <img src={linkedin} alt="linkedin" className="contact-img" ></img> 
           <img src={gmail} alt="gmail" className="contact-img" ></img>
           <img src={leetcode} alt="leetcode" className="contact-img" ></img>
        </div>
        </>
    )
}
export default Home