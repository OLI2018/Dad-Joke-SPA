
// defines a place where a joke pops up 
const jokeEl = document.getElementById('joke')
// Get Another Joke button
const jokeBtn = document.getElementById('jokeBtn')
// Search API path/ link to search for jokes by a key word/ users input 

// locate a form by its ID in HTML document 
const searchFormField = document.getElementById("searchform") 
// locate entered input in search field by its ID in HTML document 
const inputSearchField = document.getElementById("search") 

// find like emoji (likeCount) in HTML doc  
var likeIcon = document.getElementById("likeIkon"); 
// find disLikeCount emoji (dislikeCount) in HTML doc  
var dislikeIcon = document.getElementById("disLikeIcon"); 

const SEARCH_API = 'https://icanhazdadjoke.com/search?term="'
// Search API path/ link to search for random jokes 
const SEARCH_RANDOM_API = 'https://icanhazdadjoke.com'
// this is a config var to fetch data per API instructions/needs to go to header  
const config = {
  headers: {
    Accept: 'application/json',
  }
}

// add event listner on click event on button 
jokeBtn.addEventListener('click', fetchRandomJoke)
// fetch random jokes from API server 
function fetchRandomJoke() {

  fetch(SEARCH_RANDOM_API, config)
    .then((res) => res.json())
    .then((data) => {
      jokeEl.innerHTML = data.joke
    })
}
// add event listner on serach/ submit form event 
searchFormField.addEventListener ("submit", (e) => {
  e.preventDefault(); 
  const searchTerm = inputSearchField.value; 
  if(searchTerm && searchTerm !== '') {
    fetchJokesByInput(SEARCH_API + searchTerm)
    inputSearchField.value = ''
  } else {
    window.location.reload()
  } 
})
// fetch jokes by entered input/ key from API server 
function fetchJokesByInput(APIbyEnteredInput) {
    fetch(APIbyEnteredInput, config)
    .then(resp => resp.json())
    .then(listOfJokes => {
          const numberOfJoke = listOfJokes.results.length - 1;
          const random = Math.round(Math.random() * numberOfJoke); 
                jokeEl.innerHTML = listOfJokes.results[random].joke
    })
}
//counter to like icon 
likeIcon.addEventListener("click", function(e){
  e.preventDefault()
  likeCount.value = parseInt(likeCount.value) + 1; 
})

//counter to dislike icon 
dislikeIcon.addEventListener("click", function(e){
  e.preventDefault()
  dislikeCount.value = parseInt(dislikeCount.value) + 1; 
})


