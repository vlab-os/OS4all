function setActive(element) {
    // Remove 'active' class from all links
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Add 'active' class to the clicked link
    element.classList.add('active');
}