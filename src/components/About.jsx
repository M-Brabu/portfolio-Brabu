import alo from '../assets/alo.png'
import ibm from '../assets/ibm.webp'
import ucen from '../assets/ucen.webp'
import snm from '../assets/snm.webp'
import nptel from '../assets/nptel.jpg'
import naan from '../assets/naan.png'
import hackerrank from '../assets/hackerrank.png'
function About(){
    return(<>
    <h3 className='sclclg'>Education  </h3>
    <div className="education">
        <h4 className='sclclg'>College </h4> 
        <div className="abt-img-div">
          <img src={ucen} alt="ALO INFO TECH" className='about-img'/>
        </div>
        <h5>University College of Engineering Nagercoil (2023-2027)</h5>
        <p>Computer Science Engineering</p>
        <p>CGPA:8.56 (upto semester 6)</p>
    </div>
    <div className="education">
        <h4 className='sclclg'>School </h4> 
        <div className="abt-img-div">
          <img src={snm} alt="ALO INFO TECH" className='about-img'/>
        </div>
        <h5>SNM Hindu Vidyalaya Krishnancoil (2021-2022)</h5>
        <p>xll percentage : 90%</p>
    </div>
    <h3 className='sclclg'>Internship </h3>
    <div className="internship">
          <h4 className='sclclg'>MERN Stack Intern </h4> 
        <div className="abt-img-div">
          <img src={alo} alt="ALO INFO TECH" className='about-img'/>
        </div>
        <h5>Alo Info Tech (jun 2026 - jul 2026)</h5>
       
        <p>
            During my MERN Stack Internship at Alo Info Tech, I gained practical experience
            with React.js, Node.js, Express.js, and MongoDB. I worked on building 
            responsive web applications, integrating REST APIs, handling database 
            operations, and using Git/GitHub for version control.
        </p>
    </div>
    <div className="internship">
        <h4 className='sclclg'>Data Analytics Intern</h4> 
        <div className="abt-img-div">
           <img src={ibm} alt="IBM" className='about-img' />
        </div>
        <h5>IBM - Adroit Virtual Internship (mar 2026 - apr 2026)</h5>
        <p>
            Selected through the Naan Mudhalvan program 
            for an IBM Cognos Analytics internship, where I gained 
            practical experience in data analysis, visualization, dashboard creation,
             and report generation using IBM Cognos Analytics.
        </p>
    </div>
    <div className="education">
        <h4 className='sclclg'>Achievments </h4> 
        <div className="abt-img-div">
          <img src={ucen} alt="ucen" className='about-img'/>
        </div>
        <h4>Crezenta Symbosium</h4>
        <p>Prompt Engineering</p>
        <p>Secured Prize for best prompt engineer for website creation using Lovable and bolt and antigravity</p>
    </div>
    
    <div className="education">
        <h4 className='sclclg'>Achievments </h4> 
        <div className="abt-img-div">
          <img src={ucen} alt="ucen" className='about-img'/>
        </div>
        <h4>Induction Programme</h4>
        <p>Best Performer Award</p>
        <p>Actively Participated induction programme held at University college of engineering Nagercoil </p>
    </div>

    <div className="education">
        <h4 className='sclclg'>Certifications</h4> 
        <div className="abt-img-div">
          <img src={nptel} alt="ucen" className='about-img'/>
        </div>
        <h4>Programming in Java</h4>
        <p>Nptel - IIT Kharagpur</p>
        <p>Secured 97% Gold Elite Certification in Java</p>
    </div>
    <div className="education">
        <h4 className='sclclg'>certification</h4> 
        <div className="abt-img-div">
          <img src={hackerrank} alt="ucen" className='about-img'/>
        </div>
        <h4>Hackerrank</h4>
        <p>SQL Basic Certification</p>
        <p>Cleared Basic SQL certification test at Hackerrank</p>
    </div>
    <div className="education">
        <h4 className='sclclg'>certification</h4> 
        <div className="abt-img-div">
          <img src={ibm} alt="ucen" className='about-img'/>
        </div>
        <h4>Data Analytics</h4>
        <p>IBM Cognos Analytics certiication from IBM</p>
        <p>Data Analytics by using IBM Cognos an data analysis tools which is used to make dashboards and reports</p>
    </div>
     <div className="education">
        <h4 className='sclclg'>certification</h4> 
        <div className="abt-img-div">
          <img src={naan} alt="ucen" className='about-img'/>
        </div>
        <h4>Front End Technologies</h4>
        <p>Naan Mudhalvan & IBM</p>
        <p>Front end Technoloies such as HTML ,CSS, JS and ReactJs are covered in this certification</p>
    </div>
    </>)
}
export default About