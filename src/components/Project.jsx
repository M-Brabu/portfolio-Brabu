import movie from '../assets/movie.png'
import skywing from '../assets/skywing.png'
import codelens from '../assets/codelens.png'
import github from '../assets/github.png'
function Project(){
    return(
        <>
         <div className="project">
            <div className="project-img-div">
               <img src={movie} alt="movie hunt" className="project-img" />
            </div>
            <div className="project-content-div">
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
                <img src={github} alt="GitHub" className="live-git" />
                <img src="" alt="" className="live-git" />
               </div>
            </div>
         </div>
         <div className="project">
            <div className="project-img-div">
               <img src={codelens} alt="code lens" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
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
                <img src={github} alt="GitHub" className="live-git" />
                <img src="" alt="" className="live-git" />
               </div>
            </div>
         </div>
        <div className="project">
            <div className="project-img-div">
                <img src={skywing} alt="skywings" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
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
                <img src={github} alt="GitHub" className="live-git" />
                <img src="" alt="" className="live-git" />
            </div>
         </div>
    </div>
          <div className="project">
            <div className="project-img-div">
               <img src={codelens} alt="code lens" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
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
                <img src={github} alt="GitHub" className="live-git" />
                <img src="" alt="" className="live-git" />
               </div>
            </div>
         </div>
        <div className="project">
            <div className="project-img-div">
                <img src={skywing} alt="skywings" className="project-img" />
            </div>
            <div className="project-content-div">
               <p className="project-description">
                  A Weather Web Application which can show weather 
                  details of the city according to the user search
                   
                <h4>Tech : HTML ,CSS ,JavaScript ,OpenWeather API</h4>
                </p>
             <div className="live-github">
                <img src={github} alt="GitHub" className="live-git" />
                <img src="" alt="" className="live-git" />
            </div>
         </div>
    </div>

     </>
    )
}

export default Project