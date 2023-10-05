//your code here
const myObj = { dragged:'',dropOn: '',};
const images = document.getElementsByClassName('image');
const parentDiv = document.getElementById('parent');


for (let i = 0; i < images.length; i++) {
	let divi = images[i];
	divi.addEventListener('dragstart', handelDragStart);
	divi.addEventListener('dragover', handleDragOver);
	divi.addEventListener('drop', handleDropEvent);
}

function handelDragStart(event){
    myObj.dragged = event.target.id;
}

function handleDragOver(event) {
    event.preventDefault();
}
function handleDropEvent(event) {
    myObj.dropOn = event.target.id;
    swapImages();
}

function swapImages() {
    if (myObj.dragged === myObj.dropOn) {
        return;
    }

    let divA = document.getElementById(myObj.dragged);
    let divB = document.getElementById(myObj.dropOn);
// Ensure elements exist before swapping
    if (divA && divB) {
        // Get the next elements for reordering
        let divNextToB = divB.nextElementSibling;
        let divNextToA = divA.nextElementSibling;

        // Swap the elements
        parentDiv.insertBefore(divA, divNextToB);
        parentDiv.insertBefore(divB, divNextToA);
    } else {
        console.error("One or both of the elements do not exist.");
    }
}