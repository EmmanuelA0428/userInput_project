let userInput = document.querySelector("#username");
let userInput2 = document.querySelector("#password");
let submitButton = document.querySelector("#submit-button");
let body = document.querySelector("body");
let errorMessage = document.querySelector("#error")
let successMessage = document.querySelector("#success")


submitButton.onclick = function (event) {

    event.preventDefault();


    if (userInput.value == "Baby Yoda" && userInput2.value == "Squirtle") {
        errorMessage.style.display = "none";
        successMessage.style.display = "block";
        body.style.backgroundColor = "lightblue"
    }



    else { 
        errorMessage.style.display = "block";
        successMessage.style.display = "none";
        

    }



}
