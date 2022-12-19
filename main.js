const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const main = document.getElementById("main");
const searchval=document.getElementById("search");
const form=document.querySelector("form")
async function getMovie(url) {
    const resp = await fetch(url)
    const respdata = await resp.json();
    main.innerHTML="";
    showMovie(respdata.results)
    
}
 function showMovie(respdata) {
    respdata.forEach((value) => {
        const { poster_path, original_title, vote_average,overview } = value;
        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");
        movieEl.innerHTML = ` 
        <img src="${IMGPATH + poster_path}">
        <div class="movie-info">
            <h3>${original_title}</h3>
            <span class="${colorByRating(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
        ${overview}
        </div>`
        main.appendChild(movieEl);
    })
}
function colorByRating(vote) {

    if (vote >= 8) { return "green" }
    else if (vote >= 5 && vote <= 8) { return "orange" }
    else return "red"

}
getMovie(APIURL);
form.addEventListener("submit", (e)=>{e.preventDefault();
const searchvalue=searchval.value;
getMovie(SEARCHAPI+searchvalue)});

const arr=[1,2,3,3,3,4,5,6];
const arr2=arr.filter((data)=>{return data!==3;});
