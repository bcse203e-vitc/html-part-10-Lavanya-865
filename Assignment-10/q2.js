document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("redBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = "red";
    });

    document.getElementById("blueBtn").addEventListener("click", function() {
        document.body.style.backgroundColor = "blue";
    });
});
