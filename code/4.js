window.onload = () => {
    var cells = Array.from(document.getElementsByTagName('td'));
    cells.forEach((cell, index) => {
        var i = parseInt(index / 7)
        var j = cell.cellIndex
        if ((i + j) % 2 == 0) {
            cell.style.background = 'red';
        }
    });
}