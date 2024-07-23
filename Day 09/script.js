const heading1 = document.getElementById("heading1");
const heading1Class = document.getElementsByClassName("heading-1");
const bodyEle = document.getElementsByClassName("body");
heading1.textContent = "My name is MUHAMMAD MUDASSIR ZAMAN";
bodyEle[0].style.backgroundColor = "red";
bodyEle[0].style.color = "white";

// ? Activity 2: Creating and Appending Elements
// ? Task 3
const div = document.createElement("div");
div.textContent = "I am a new div";
div.style.fontSize = "50px";
bodyEle[0].appendChild(div);
// ? Task 4:
let ul = document.createElement("ul");
let li1 = document.createElement("li");
li1.innerText = "I am first li element";
ul.append(li1);
let li2 = document.createElement("li");
li2.innerText = "I am second li element";
ul.append(li2);
let li3 = document.createElement("li");

li3.innerText = "I am third li element";
ul.append(li3);
let li4 = document.createElement("li");

li4.innerText = "I am fourth li element";
ul.append(li4);
bodyEle[0].append(ul);

// ? Activity 3: Removing Elements
// ? Task 5:

li1.remove();
// ? Task 6:
ul.lastElementChild.remove();

// ? Activity 4: Modifying Attributes and classes
// ? Task 7:
let img = document.createElement("img");
img.setAttribute("src", "./pic.jpg");
img.setAttribute("width", "400px");
ul.append(img);

// ? Task 8:
ul.classList.add("ul-element", "ul-items");
ul.classList.remove("ul-element");

// ? Activity 5: Event Handling
// ? Task 9:

let btn = document.getElementById("btn");
let para = document.getElementById("para");
para.style.border = "4px solid black";
para.style.display = "inline";
para.style.padding = "20px";
btn.addEventListener("click", () => {
  para.textContent = "I am the new text in the paragraph";
  bodyEle[0].pre("para");
});

para.addEventListener("mouseover", () => {
  para.style.border = "4px solid blue";
});
