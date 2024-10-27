
/**
 * Toggles the header and navigation menu between standard and expanded vertical layout.
 */
function toggleMenu() {
    const header = document.getElementById("header");
    const navigationList = document.getElementById("navigationList");

    // Kolla om headern är i fullt expanderat läge
    if (header.style.height === "100vh") {
        header.style.height = "70px"; // Återställ till standardhöjd
        navigationList.classList.remove('vertical'); // Gör listan horisontell igen
    } else {
        header.style.height = "100vh"; // Expandera header till hela vyhöjden
        navigationList.classList.add('vertical'); // Gör listan vertikal
    }
}


/**
 * Increases the font size of the entire page by 1%.
 * Checks the current font size on the body and increases it incrementally.
 */
function increaseFontSize() {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize * 1.01}px`; 

    // var newSize = (currentSize * 1.1) + "px"; // ett alternativ till ovan syntax

}


/**
 * Decreases the font size of the entire page by 10%.
 * Checks the current font size on the body and decreases it incrementally.
 */
function decreaseFontSize() {
    const body = document.body;
    const currentSize = parseFloat(window.getComputedStyle(body).fontSize);
    body.style.fontSize = `${currentSize * 0.99}px`; // Minska med 1%
}
