

const pickColor = document.getElementById('colorPicker');  // Select color input
const gridForm = document.getElementById('sizePicker');  // Select size input
const designCanvas = document.getElementById('pixelCanvas');  // the actual pixel canvas
const submitButton = document.getElementById('createGrid');


// When size is submitted by the user, call makeGrid()
submitButton.addEventListener ('click', function(event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});


function makeGrid(height, width) {
  while (designCanvas.hasChildNodes()) {  //doesn't add another grid
    designCanvas.firstElementChild.remove();  // removes the color squares
  }
  for(let x = 0; x <= height; x++) {
        let row = designCanvas.insertRow(x);
        for(let y = 0; y <= width; y++) {
            let cell = row.insertCell(y);
            cell.addEventListener('click', function(event) {
                cell.style.backgroundColor = pickColor.value;
            });
    }
}
}
