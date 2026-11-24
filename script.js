
document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Download CV button
    const downloadButton = document.getElementById("download-cv");

    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            window.print();
        });
    }

});
