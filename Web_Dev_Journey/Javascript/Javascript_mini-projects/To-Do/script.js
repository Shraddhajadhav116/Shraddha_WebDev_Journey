let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");
let li = document.querySelector("li");
let checkbox = document.querySelector(".checkbox");

btn.addEventListener("click", function () {
  let item = document.createElement("li");

  item.innerText = input.value;
  ul.appendChild(item);

  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList = "checkbox";

  item.appendChild(check);

  input.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "INPUT") {
    let listItem = event.target.parentElement;
    if (event.target.checked) {
      listItem.style.textDecoration = "line-through";
    } else {
      listItem.style.textDecoration = "none";
    }
  }
});
