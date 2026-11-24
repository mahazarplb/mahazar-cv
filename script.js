
document.addEventListener("DOMContentLoaded", function () {
    const printButton = document.getElementById("print-cv");

    if (printButton) {
        printButton.addEventListener("click", function () {
            window.print();
        });
    }
});
