// Sample movie data
const movies = [
    {
        title: "Inception",
        image: "https://kumarrohan9724.github.io/NETFLIX-CLONE/inception-movie-poster-netflix-india-only-top-content.jpeg"

    },
    {
        title: "The Dark Knight",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUu_d33aVcSWhobuE3qA-fmvLbzsi-7pBdOA&s"
    },
    {
        title: "Interstellar",
        image:"https://edimakor.hitpaw.com/images/edimakor-2024/subtitle-tips/interstellar-movie.jpg"
    },
    {
        title: "The Matrix",
        image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/The-Matrix-poster-green.jpg"
    },
];

// Function to display movies
function displayMovies() {
    const movieContainer = document.getElementById('movie-container');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';
        movieContainer.style.margin='500px';
        movieContainer.style.height='900px';
        movieContainer.style.backgroundSize='cover';

        movieDiv.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <h3>${movie.title}</h3>
        `;
        movieContainer.appendChild(movieDiv);
        
    });
}

// Call the function to display movies
displayMovies();