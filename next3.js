
const main = document.getElementById("main")

fetch("https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2022&api_key=fb6b0ba6fe35d665ac62cab029a813f2&page=3") 
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
</div>`
            
main.appendChild(movieEl) 
})
}
     
        
            function scenetia() {
              window.location.href= "index.html";}
              
              function next2() {
              window.location.href= "next2.html";}
              
              function next3() {
              window.location.href= "next3.html";}
              
              function next4() {
              window.location.href= "next4.html";}
              
              function next5() {
              window.location.href= "next5.html";}       