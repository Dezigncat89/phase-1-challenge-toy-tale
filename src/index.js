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
// Fetch Request
fetch('https://fontmeme.com/permalink/180719/67429e6afec53d21d64643101c43f029.png')
.then(function(response) {
  console.log(response);
  return response.json();
})
.then(function(json) {
  console.log(json);
});

