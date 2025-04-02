// script.js
document.getElementById("submitName").addEventListener("click", function () {
    const userName = document.getElementById("userName").value;
    if (userName.trim() !== "") {
        sessionStorage.setItem("userName", userName);
        document.getElementById("nameInputContainer").classList.add("hidden");
        document.getElementById("interactiveArea").classList.remove("hidden");
        document.getElementById("backgroundMusic").play();
    }
});

document.querySelectorAll(".object").forEach((obj) => {
    obj.addEventListener("click", function () {
        const userName = sessionStorage.getItem("userName");
        const text = this.dataset.text;
        const imgSrc = this.dataset.img;
        
        if (this.id === "character") {
            document.getElementById("popupText").textContent = text + userName + "!";
            document.getElementById("popupText").style.display = "block";
            document.getElementById("popupImage").style.display = "none";
        } else {
            document.getElementById("popupImage").src = imgSrc;
            document.getElementById("popupImage").style.display = "block";
            document.getElementById("popupText").style.display = "none";
        }
        
        document.getElementById("popup").style.display = "block";
        new Audio(this.dataset.sound).play();
    });
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("popup").style.display = "none";
});
