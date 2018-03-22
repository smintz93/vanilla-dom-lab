console.log("this is working");

// Find / retrieve an element
// Use document.querySelector() to find an element in the DOM.

document.querySelector("div")

// Use document.querySelectorAll() to find a collection of elements in the DOM.

document.querySelectorAll("Section")

const findingSections = document.querySelectorAll("Section")
// console.log(findingSections)


const container = document.querySelector("#container")
console.log(container)



// const secondImage = "http://hookedonhouses.net/wp-content/uploads/2015/02/Bungalow-built-in-Bozeman-Montana.jpg"

const secondImg = document.querySelector("#second-img")

 // Get all of the elements with the class info and save them to a variable infoElements. Console.log that variable.

const infoElements = document.querySelectorAll("Section")

console.log(infoElements)

// 🔵 Get the first p element from the page using querySelector and save it to a variable firstP.


const firstP = document.querySelector("p");

// 🔵 Change the innerText of that element to 'Jamboree sandwich at the Jambo-ree'

// const firstP = document.querySelector("p")

firstP.innerText = "Jamboree sandwich at the Jambo-ree"

// 🔵 Make it so the first paragraph's text is parsed as HTML so that you can use tags within it. Use innerHTML instead of innerText.

// .innerHTML = '<strong>Put your hands where I can see \'em, so they look like 12pm</strong>'

// Notice that the string is parsed as strong element.

firstP.innerHTML = "<strong>Put your hands where I can see \'em, so they look like 12pm</strong>"


const newDiv = document.createElement('div');

console.log(newDiv)


// 🔵 Append your previously created div to the body of the document.

document.body.appendChild(newDiv)



// 🔵 Get the first section element from the page and save it to a variable firstSection.

const firstSection = document.querySelector("Section")

// 🔵 Create a p element and save it to a variable someP.


const someP = document.createElement("p")

// 🔵 Append it to the section.

firstSection.appendChild(someP)



// 🔵 Create an img element and save it to a variable newImg.

const newImg = document.createElement("img")

// 🔵 Give the img element a src of some image you find on the internet. .src is a property like .innerText, therefore, you would give it a value with the assignment operator =.


newImg.src = "http://cdn1-www.dogtime.com/assets/uploads/gallery/rhodesian-ridgeback-dog-breed-pictures/3-curlridge.jpg"


// 🔵 Append the img to the document body.

document.body.appendChild(newImg)


 // Create a section element, give it an id of butterfly, and append it to the body.

 const newSection = document.createElement("section");

 newSection.id = "butterfly"

 document.body.appendChild(newSection);

 // 🔵 You should already have the first section element. Get the list of classes given to the first section element (there is only one class in this particular class list).


firstSection.classList.add("wdi-remote-gizmo");
console.log(firstSection)




// const firstSectionClasses = firstSection.classList

// console.log(firstSectionClassses)
// // 🔵 Add the class wdi-remote-gizmo to the first section element.

// firstSection.classList.add("wdi-remote-gizmo");
// // console.log(firstSection)


// 🔵 Check if the first section tag has the class wdi-remote-gizmo.


const firstSectionClasses = firstSection.classList

firstSectionClasses.contains("wdi-remote-gizmo")

// 🔵 Remove the class wdi-remote-gizmo from the first section element.


firstSection.classList.remove("wdi-remote-gizmo")







