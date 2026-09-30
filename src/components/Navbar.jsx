import {Link} from 'react-router-dom'
function Navbar(){
    return(
        <>
        <div className="navbar">
            <div className="brabu-nav">Brabu M</div>
            <div className="nav-btn-group">
                <Link to="/"><button className="nav-btn">Home</button></Link>
                <Link to="/about"><button className="nav-btn">About</button></Link>
                <Link to="/project"><button className="nav-btn">Projects</button></Link>
                <Link to="/Skills"><button className="nav-btn">Skills</button></Link>
            </div>
        </div>
        </>
    )
}
export default Navbar
