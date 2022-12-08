function getGifs(searchInput) {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=z5VdDCH6KNeoZAidalhDHwxxepCSRrj7&q=${searchInput}&limit=10&offset=0&rating=g&lang=en`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((myGifs) => {
      myGifs.data.map((g) => {
        let image = new Image();
        image.src = g.images.original.url;
        document.getElementById("gifContainer").appendChild(image);
      });
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

function search(event) {
  getGifs(searchInput.value);
  event.preventDefault();
}

const form = document.getElementById("form");
const searchInput = document.getElementById("searchInput");
form.addEventListener("submit", search);
