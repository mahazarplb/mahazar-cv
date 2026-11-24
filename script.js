
document.addEventListener("DOMContentLoaded", function () {

    // Update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Save website as PDF
    const downloadButton = document.getElementById("download-cv");

    if (downloadButton) {
        downloadButton.addEventListener("click", function () {
            window.print();
        });
    }

});
