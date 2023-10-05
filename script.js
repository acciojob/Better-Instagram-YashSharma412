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
    let divNextToB = divB.nextElementSibling;
    parentDiv.insertBefore(divB, divA);
    parentDiv.insertBefore(divA, divNextToB);    

}