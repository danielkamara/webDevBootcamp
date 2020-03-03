var movies = [{
        title: "Coming To America",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Jumanji",
        hasWatched: false,
        rating: 3.5
    },
    {
        title: "Parasite",
        hasWatched: false,
        rating: 5
    },
    {
        title: "Hustlers",
        hasWatched: true,
        rating: 3.5,
    },

];

movies.forEach(function (movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
});