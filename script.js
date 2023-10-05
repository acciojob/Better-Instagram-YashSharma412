//your code here
const myObj = { dragged:'',dropOn: '',};
const images = document.getElementsByClassName('image');
const parentDiv = document.getElementById('parent');

document.addEventListener('DOMContentLoaded', function() {
    
    for (let i = 0; i < images.length; i++) {
        let divi = images[i];
        divi.id = `div${i + 1}`;
        divi.addEventListener('dragstart', handelDragStart);
        divi.addEventListener('dragover', handleDragOver);
        divi.addEventListener('drop', handleDropEvent);
    }
});
function handelDragStart(event){
    console.log('started dragging', event.target.id);
    myObj.dragged = event.target.id;
}

function handleDragOver(event) {
    event.preventDefault();
}
function handleDropEvent(event) {
    console.log('dropped on ', event.target.id);
    myObj.dropOn = event.target.id;
    swapImages();
}

function swapImages() {
    if (myObj.dragged === myObj.dropOn) {
        console.log('nothing happens')
        return;
    }

    let divA = document.getElementById(myObj.dragged);
    let divB = document.getElementById(myObj.dropOn);
    let divNextToB = divB.nextElementSibling;
    parentDiv.insertBefore(divB, divA);
    parentDiv.insertBefore(divA, divNextToB);    

}