// 1. ensure the connect form is properly completed before submission 

// 1(a) locate the connect form and some input fields:
let form = document.getElementById("connectForm");

let fullname = document.getElementById("fullname");
let email = document.getElementById("email");
let postalcode = document.getElementById("postalcode");

// 1(b) RegExp of some fields:
let validFullname = /[A-Za-z]{2,}/;
let validEmail = /\S+@\S+\.\S+/;
let validpostalCode = /^[A-Za-z][0-9][A-Za-z][ -]?[0-9][A-Za-z][0-9]$/;

// 1(c) use addEventListener to check if those input fields meet RegExp or not. 
// if not, event.preventDefault() will stop the event "submit". 
form.addEventListener("submit", (event) => {

    if(!validFullname.test(fullname.value)){
        alert("Name:  Please enter at least 2 letters.");
        event.preventDefault();
    }
    else 
    if (!validEmail.test(email.value)) {
        alert("Email:  Please enter your email address in proper format.");
        event.preventDefault();
    } 
    else if (!validpostalCode.test(postalcode.value)) {
        alert("Postal Code:  Please enter a Canadian postal code.");
        event.preventDefault();
    }
});


// 2. When "Hiring" radio button is clicked, show Hourly Wage input box.
let hiring = document.getElementById("hiring");
// let wage_location = document.getElementById("wage_location");
let wage_label = document.getElementById("wage_label");
let wage_input = document.getElementById("wage_input");

hiring.addEventListener("click", (event)=> {
    wage_label.innerHTML = "";
    wage_input.innerHTML = "";
    
    wage_label.innerHTML = "Hourly Wage:";
    
    let wageInput = document.createElement("input");
    wageInput.id = "wage";
    wageInput.name = "wage";
    wageInput.type = "text";

    wage_input.appendChild(wageInput);

});

// 3. (Extra) When "Question/Comment" radio button is clicked, HIDE "Hourly Wage:" and the input box.
let question = document.getElementById("question");

question.addEventListener("click", (event)=> {
    wage_label.innerHTML = "";
    wage_input.innerHTML = "";
})

let comment = document.getElementById("comment");

comment.addEventListener("click", (event)=> {
    wage_label.innerHTML = "";
    wage_input.innerHTML = "";
})



function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
  
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}