let amount = 0
let shouldHandleKeyDown = true;
let shouldHandleBSDown = true;

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 32){
        if (!shouldHandleKeyDown) return;
        shouldHandleKeyDown = false;
        amount += 1
        document.getElementById("amount").textContent = amount
    }
});

document.addEventListener('keyup', function(event){
    if (event.keyCode == 32){
        shouldHandleKeyDown = true;
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 82){
        amount = 0
        document.getElementById("amount").textContent = 0
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode == 8){
        if (amount !== 0) {
            if (!shouldHandleBSDown) return;
            shouldHandleBSDown = false;
            amount -= 1
            document.getElementById("amount").textContent = amount
        }
    }
});

document.addEventListener('keyup', function(event){
    if (event.keyCode == 8){
        shouldHandleBSDown = true;
    }
});