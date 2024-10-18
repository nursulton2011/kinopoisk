document.addEventListener("DOMContentLoaded", function() {
    // ID фильма, который нужно получить (можно заменить "Titanic" на любую другую строку)
    const movieTitle = "Titanic";
    const apiKey = "11709030";
    const apiUrl = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

    // Запрос к OMDB API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                // Обновляем содержимое модального окна
                document.getElementById("movieModalLabel").textContent = data.Title;
                document.getElementById("modalMovieImage").src = data.Poster;
                document.getElementById("modalMovieDescription").textContent = `
                    Title: ${data.Title}
                    Year: ${data.Year}
                    Rated: ${data.Rated}
                    Released: ${data.Released}
                    Runtime: ${data.Runtime}
                    Genre: ${data.Genre}
                    Director: ${data.Director}
                    Writer: ${data.Writer}
                    Actors: ${data.Actors}
                    Plot: ${data.Plot}
                    Language: ${data.Language}
                    Awards: ${data.Awards}
                    IMDB Rating: ${data.imdbRating}
                `;

                // Показываем модальное окно
                const movieModal = new bootstrap.Modal(document.getElementById('movieModal'));
                movieModal.show();
            } else {
                alert("Movie not found!");
            }
        })
        .catch(error => {
            console.error("Error fetching movie data:", error);
        });
});
