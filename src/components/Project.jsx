import Navbar from './Navbar'
import movie from '../assets/movie.png'
import skywing from '../assets/skywing.png'
import codelens from '../assets/codelens.png'
import github from '../assets/github.png'
import netlify from '../assets/netlify.svg'
import vercel from '../assets/vercel.png'
import weather from '../assets/weather.png'
function Project(){
    return(
        <>
        <Navbar/>
         <div className="project">
            <div className="project-img-div">
               <img src={movie} alt="movie hunt" className="project-img" />
            </div>
            <div className="project-content-div">
                <h4 className='sclclg'>Movie Hunt</h4> 
               <p className="project-description">
                Movie Web Applicaton which can show the trending movies and 
                show the movies by genre (Comedy,Action,Animation etc..)
                and user can search the movie by name  
                 <ul>
                            <li>Top 10 Trending Movies</li>
                            <li>Search movies By name</li>
                            <li>Movies by genre</li>
                </ul> 
                <h4>Tech : ReactJS , Bootstrap , OMDB API , TMDB API </h4>
               </p>
               <div className="live-github">
           <a href="https://github.com/M-Brabu/Movie-App.git">
            <img src={github} alt="GitHub" className="live-git" />
            </a>
            
            <a href="https://moviehunterz.netlify.app/">
                <img src={netlify} alt="" className="live-git" />
            </a>
               </div>
            </div>
         </div>
         <div className="project">
            <div className="project-img-div">
               <img src={codelens} alt="code lens" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
               <h4 className='sclclg'>Code Lens</h4> 
                An AI Powered Code Reviewing Application 
                in which the user can type code in the provided editor
                and AI will give Detailed analysis of code such as 
                <ul>
                            <li>Explanation of code</li>
                            <li>Time Complexity</li>
                            <li>Space Complexity </li>
                            <li>Improved version of code</li>
                            <li>Bugs Details</li>
                </ul>
                <h4>Tech : ReactJs , NodeJs, ExpressJs, Gemini API </h4>
                </p>
               <div className="live-github">
               <a href="https://github.com/M-Brabu/code-reviewer.git">
                  <img src={github} alt="GitHub" className="live-git" />
                </a>
               <a href="https://code-reviewer-rust-six.vercel.app/">
                <img src={vercel} alt="" className="live-git" />
               </a>
               </div>
            </div>
         </div>
        <div className="project">
            <div className="project-img-div">
                <img src={skywing} alt="skywings" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
                  <h4 className='sclclg'>Sky Wings </h4> 
                  A Show Case Site for the IBM Cognos Analytics Internship 
                  using SkyWings Travels Company Dataset               
                      <ul>
                            <li>Dashboard</li>
                            <li>Data Exploration</li>
                            <li>Story (Presentation)</li>
                            <li>Report</li>
                </ul> 
                <h4>Tech : ReactJs ,IBM Cognos for Analytics</h4>
                </p>
             <div className="live-github">
               <a href="https://github.com/M-Brabu/Skywings.git">
                <img src={github} alt="GitHub" className="live-git" />
               </a>
               <a href="https://skywings-cognos-analysis-brabu.netlify.app">
                <img src={netlify} alt="" className="live-git" />
               </a>
            </div>
         </div>
    </div>
        <div className="project">
            <div className="project-img-div">
                <img src={weather} alt="skywings" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
                   <h4 className='sclclg'>Weather App</h4> 
                  A Weather Web Application which can show weather 
                  details of the city according to the user search
                   
                <h4>Tech : HTML ,CSS ,J`avaScript ,OpenWeather API</h4>
                </p>
             <div className="live-github">
               <a href="https://github.com/M-Brabu/weather-app.git">
                <img src={github} alt="GitHub" className="live-git" />
               </a>
               <a href="https://lively-scone-b4ac8b.netlify.app/">
                <img src={netlify} alt="" className="live-git" />
               </a>
            </div>
         </div>
    </div>

     </>
    )
}

export default Project