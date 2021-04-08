let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

<div class="card">
    <h2>Woody</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>

<div class="card">
    <h2>Buzz Lightyear</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>

<div class="card">
    <h2>Mr. Potato Head</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>

<div class="card">
    <h2>Slinky Dog</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>

<div class="card">
    <h2>Ham</h2>
    <img src="[toy_image_url]" class="toy-avatar" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div>
headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0
});

headers: 
{
  "Content-Type": "application/json",
  Accept: "application/json"
}

body: JSON.stringify({
  "likes": <new number>
});
