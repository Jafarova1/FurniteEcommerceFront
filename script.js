function toggleMenu() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

function openBasket() {
    var modal = document.getElementById("basketModal");
    modal.style.display = "block";
    // You can add logic to fetch and display basket items here
    // For simplicity, let's just add a sample item to the basket
    var basketItems = document.getElementById("basketItems");
    basketItems.innerHTML = "<img>pexels-mohan-nannapaneni-13612971.jpg</img>";
}



function closeBasket() {
    var modal = document.getElementById("basketModal");
    modal.style.display = "none";
}

// Close the basket modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("basketModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


