/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA*/
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST



const vue_app = Vue.createApp({
  // This automatically imports your movies.json file and puts it into
  //   the variable: movies
  created () {
        fetch('movies.json').then(response => response.json()).then(json => {
              this.movies = json
        })
  },
  data() {
    return {
        // This holds your movies.json data.
        movies: [],
        title: "IMBD + Josh's Top 8 Movies",
        owner: "Josh",
        github: "https://github.com/122jcruz/CruzM-p3",
        months:["January"."February","March","April","May","June","July","August","September","October","November","December"]
            }
},
  methods: {
    getMonthText(dateArray){
      switch (dateArray[1]) {
        var releaseDate;
        var month;
        case 1:
        month = months[0]
        break
        case 2:
        month = months[1]
        break;
        case 3:
        month = months[2]
        break;
        case 4:
        month = months[3]
        break;
        case 5:
        month = months[4]
        break;
        case 6:
        month = months[5]
        break;
        case 7:
        month = months[6]
        break;
        case 8:
        month = months[7]
        break;
        case 9:
        month = months[8]
        break;
        case 10:
        month = months[9]
        break;
        case 11:
        month = months[10]
        break;
        case 12:
        month = months[11]
        break;
}

}
releaseDate = month + " " + movie.released[2] + " " + movie.released[0]

}
}



vue_app.mount("#vue_app")
