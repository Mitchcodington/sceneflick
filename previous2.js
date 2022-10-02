
const main = document.getElementById("main")

fetch("https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2021&api_key=fb6b0ba6fe35d665ac62cab029a813f2&page=2") 
.then(response => response.json())
.then(data => {
myMovies(data.results)
})

function myMovies(movies) {
main.innerHTML = "" 
movies.forEach((movie) =>{
const {title,poster_path,vote_average,overview} = movie
const movieEl = document.createElement
('div')
movieEl.classList.add('movie')
         
movieEl.innerHTML = 
            `
<img  src="https://image.tmdb.org/t/p/w1280${poster_path}"   alt="${title}">
            
<p class="movie-info">
<h3 style="padding:0.3em;font-size:0.9em">${title} </h3></p>
                
<div class="overview">
<div class="dropdown">
<button id="story"><span  ><a id="dropbtn"  href="#">Storyline</a></span></button>
<div class="dropdown-content">
${overview}
</div>
<span>Rating: ${vote_average}</span>
</div>
</div>
</div>
</div>`
main.appendChild(movieEl) 
})
}
     
        
function scenetia() {
window.location.href= "previous.html";}
        
function previous() {
window.location.href= "previous.html";}
            
function previous2() {
window.location.href= "previous2.html";}
            
function previous3() {
window.location.href= "previous3.html";}
            
function previous4() {
window.location.href= "previous4.html";}
            
function previous5() {
window.location.href= "previous5.html";}    
