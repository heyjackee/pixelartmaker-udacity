/**
  * Udacity Pixel Art Maker Project
  * Submission #2
*/
const pickColor = document.getElementById('colorPicker');  // Select color input
const gridForm = document.getElementById('sizePicker');  // Select size input
const designCanvas = document.getElementById('pixelCanvas');  // the actual pixel canvas
const submitButton = document.getElementById('createGrid');  // button that adds the grid or clears it
const inputHeight = document.getElementById('inputHeight');  // the height of the grid from user
const inputWidth = document.getElementById('inputWidth');  // the width of the grid from user


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener ('click', function(event) {
  event.preventDefault();
  let height = inputHeight.value;
  let width = inputWidth.value;
  makeGrid(height, width);
});


/**
  * this function creates a grid of squares
  * the width is the number of squares in the horizontal position
  * hight is the number of squares in the vertical position
  * clicking on the submit button when a grid is present will clear the colors
*/
function makeGrid(height, width) {
  while (designCanvas.hasChildNodes()) {  //doesn't add another grid
    designCanvas.firstElementChild.remove();  // removes the color squares
  }
  for(let x = 0; x < height; x++) {
    let row = designCanvas.insertRow(x);
    for(let y = 0; y < width; y++) {
      let cell = row.insertCell(y);
      cell.addEventListener('click', function(event) {
        cell.style.backgroundColor = pickColor.value;
      });
    }
  }
}

