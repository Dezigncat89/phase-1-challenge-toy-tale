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

// Fetch Request to Render
async function getToys() {
    let url = 'toy-collection.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderToys() {
    let Toys = await getToys();
    let html = '';
    Toys.forEach(Toy => {
        let htmlSegment = `<div class="card">
    <h2>${card.name}</h2>
    <img src="card.image class="toy-avatar}" />
    <p>4 Likes </p>
    <button class="like-btn" id="[toy_id]">Like <3</button>
  </div> 
    </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderToys();

//Fetch Post Request
fetch('https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png', {
	method: 'POST',
	body: JSON.stringify({
  "name": "Jessie",
  "image": "https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist",
  "likes": 0,
	headers: {
		"Content-Type": "application/json",
  Accept: "application/json"
	},
	referrer: 'no-referrer'
}).then(function (response) {
	if (response.ok) {
		return response.json();
	} else {
		return Promise.reject(response);
	}
}).then(function (data) {
	console.log(data);
}).catch(function (err) {
	console.warn('Something went wrong.', err);
});
  
  //Fetch Liker Button
fetch(`https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png', {
  method: ‘PATCH’,
  body: body: JSON.stringify({
  "likes": <new number>
}),
headers: {
"Content-Type": "application/json",
  Accept: "application/json"
}
});
.then(response => response.json());
.then(json => console.log(json));
  



