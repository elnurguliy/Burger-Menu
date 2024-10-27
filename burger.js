
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

