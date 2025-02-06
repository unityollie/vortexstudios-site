document.addEventListener("DOMContentLoaded", () => {
    if (!sessionStorage.getItem("visited")) {
        showLoadingScreen();
        sessionStorage.setItem("visited", "true");
    } else {
        hideLoadingScreen();
    }
});

function showLoadingScreen() {
    document.getElementById("loading-screen").style.display = "block";
    setTimeout(hideLoadingScreen, 2000); 
}

function hideLoadingScreen() {
    document.getElementById("loading-screen").style.display = "none";
}