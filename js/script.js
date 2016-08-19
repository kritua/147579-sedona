function showHotelsMenu(item) {
    var elem = document.querySelector(item);
    if (elem.style.display == 'block') {
        elem.style.display = 'none';
    } else {
        elem.style.display = 'block';
    } 
}
