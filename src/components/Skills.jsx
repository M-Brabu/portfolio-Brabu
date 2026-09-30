import Navbar from '../components/Navbar';
import html from '../assets/html.png'
import css from '../assets/css.png'
import js from '../assets/js.png'
import bootstrap from '../assets/bootstrap.png'
import reactjs from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.png'
import expressjs from '../assets/expressjs.png'
import mongodb from '../assets/mongodb.png'
import sql from '../assets/sql.png'
import compass from '../assets/compass.png'
import java from '../assets/java.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import postman from '../assets/postman.png'
import vscode from '../assets/vscode.png'
function Skills(){
    return(<>
    <Navbar/>
    <div className="skill-div">
        <div className="skill-heading">Frontend</div>
        <div className="skill-img-div">
            <img src={html} alt="HTML" className="skill-img" />
            <img src={css} alt="CSS" className="skill-img" />
            <img src={js}  alt="JS" className="skill-img" />
            <img src={bootstrap}  alt="Bootstrap" className="skill-img" />
            <img src={reactjs}  alt="React" className="skill-img" />
        </div>
        <div className="skill-heading">Backend</div>
        <div className="skill-img-div">
            <img src={nodejs} alt="Node" className="skill-img" />
            <img src={expressjs}  alt="Express" className="skill-img" />
        </div>
        <div className="skill-heading">database</div>
        <div className="skill-img-div">
            <img src={mongodb} alt="mongodb" className="skill-img" />
            <img src={sql} alt="mongodb" className="skill-img" />
        </div>
        <div className="skill-heading">Tools</div>
        <div className="skill-img-div">
            <img src={git} alt="git" className="skill-img" />
            <img src={github} alt="github" className="skill-img" />
            <img src={postman}  alt="postman" className="skill-img" />
            <img src={vscode} alt="vscode" className="skill-img" />
            <img src={compass}  alt="compass" className="skill-img" />
        </div>
        <div className="skill-heading">programming language</div>
        <div className="skill-img-div">
            <img src={java}  alt="java" className="skill-img" />
        </div>
    </div>
 </>)
}
export default Skills