// (1) getElementById Method
// const id1 = document.getElementById("id1");
// console.log(id1); // Error
// console.log(id1.innerHTML);
// id1.innerHTML = "JavaScript Text";
// document.getElementById("id1").innerHTML = "New JavaScript Text";

// (2) getElementByTagName Method
// const tag1 = document.getElementsByTagName("h1")[1];
// console.log(tag1.innerHTML);
// tag1.innerText = "JavaScript Text Two";

// (3) getElementByClassName Method
// const class1 = document.getElementsByClassName("class1")[0];
// console.log(class1);
// console.log(class1.innerText);
// class1.innerHTML = "JavaScript Class Text";

// (4) DOM Element Style
// const myStyle = document.getElementById("id1");
// console.log(myStyle);
// console.log(myStyle.innerText);
// myStyle.style.color = "white";
// myStyle.style.backgroundColor = "red";
// myStyle.style.fontSize = "50px";
// myStyle.style.display = "inline-block";

// (5) DOM Element Attributes
// const myAtt = document.getElementById("id1");
// console.log(myAtt.innerText);
// console.log(myAtt.attributes);
// console.log(myAtt.attributes.length);
// console.log(myAtt.attributes.class);

//(6) DOM getAttributes
// const getAtt = document.getElementById("id1");
// console.log(getAtt.innerText);
// console.log(getAtt.getAttribute("id"));
// console.log(getAtt.getAttribute("class"));
// console.log(getAtt.getAttribute("href"));

// (7) DOM removeAttributes
// const remATT = document.getElementById("id1");
// console.log(remATT.innerText);
// remATT.removeAttribute("class");

// (8) DOM setAttributes
// const setATT = document.getElementById("id2");
// console.log(setATT.innerText);
// setATT.setAttribute("class", "class2");
// setATT.setAttribute("class", "class3"); // Error

// HomeWork Task

function buttonTheme() {
  const demoText = document.getElementById("text");
  const buttonOneEffect = (demoText.style.display = "none");
}

function buttonTheme2() {
  const demoText2 = document.getElementById("text");
  const buttonOneEffect = (demoText2.style.display = "block");
}
