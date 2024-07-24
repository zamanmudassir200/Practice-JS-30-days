// ? Activity 1: Basic Event Handling
// ? Task 1:
let para = document.getElementById("para");
para.addEventListener("click", () => {
  para.style.color = "red";
});

let flag = 1;
let img = document.getElementById("img");
img.addEventListener("dblclick", () => {
  // if (flag === 1) {
  //   img.style.display = "none";
  //   flag = 0;
  // } else {
  //   img.style.display = "block";
  //   flag = 1;
  // }
  if (img.style.visibility === "hidden") {
    img.style.visibility = "visible";
  } else {
    img.style.visibility = "hidden";
  }
});
// ? Activity 2: Mouse Events
// ? Task 3:

para.addEventListener("mouseover", () => {
  para.style.background = "blue";
  para.style.color = "white";
});

para.addEventListener("mouseout", () => {
  para.style.all = "unset";
});

// ? Activity 3: Keyboard Events
// ? Task 5:
let inputField = document.getElementById("inputField");
inputField.addEventListener("keydown", () => {
  console.log("key pressed");
});

// ? Task 6:
inputField.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});
// ? Activity 4: Form Submission
//? Task 7:
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
});
// ? Task 8:
let paraText = document.getElementById("para-text");

let select = document.querySelector("select");
select.addEventListener("change", () => {
  let seletedValue = select.value;
  paraText.innerText = "You have selected " + `${seletedValue}`;
});

// ? ACTIVITY 5: Event Delegation
// ? Task 9:
let ulElements = document.getElementById("ul-elements");
ulElements.addEventListener("click", (e) => {
  console.log(e.target.innerText);
});

// ?
let btn = document.getElementById("btn");
let parentEle = document.getElementById("parent");

btn.addEventListener("click", () => {
  let childElement = document.createElement("div");
  childElement.textContent = "This is a div";
  childElement.classList.add("child-element");
  parentEle.append(childElement);
});
parentEle.addEventListener("click", (e) => {
  if (e.target.matches(".child-element")) {
    console.log("Child element clicked!");
  }
});
