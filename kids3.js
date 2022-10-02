
const main = document.getElementById("main")

fetch("https://api.themoviedb.org/3/discover/movie?certification_country=us&certification.lte=G&sort_by=popularity.desc&api_key=fb6b0ba6fe35d665ac62cab029a813f2&page=3") 
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
<h3 style="padding:0.3em;font-size: 0.9rem;">${title} </h3></p>
                
<div class="overview">
<div class="dropdown">
<button id="story"><span  ><a id="dropbtn"  href="#">Storyline</a></span></button>
<div class="dropdown-content">
${overview}
</div>
<span class="green">Rating: ${vote_average}</span>
</div>
</div>
</div>`
main.appendChild(movieEl) 
})
}
     

            function kids() {
              window.location.href= "kids.html";}
              
              function kids2() {
              window.location.href= "kids2.html";}
              
              function kids3() {
              window.location.href= "kids3.html";}
              
              function kids4() {
              window.location.href= "kids4.html";}
              
              function kids5() {
              window.location.href= "kids5.html";} 