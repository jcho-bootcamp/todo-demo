// Not recommended to change to arrow function (if necessary "this" needs to change as well)
// https://dmitripavlutin.com/when-not-to-use-arrow-functions-in-javascript/

const lis = document.querySelectorAll("li");

for (let i = 0; i < lis.length; i++) {
  // Add class green while mouse
  lis[i].addEventListener("mousemove", function () {
    this.classList.add("green");
  });
  // Remove class green while no mouse
  lis[i].addEventListener("mouseout", function () {
    this.classList.remove("green");
  });

  // Add class line-through after click
  lis[i].addEventListener("click", function () {
    this.classList.toggle("line-through");
  });
}