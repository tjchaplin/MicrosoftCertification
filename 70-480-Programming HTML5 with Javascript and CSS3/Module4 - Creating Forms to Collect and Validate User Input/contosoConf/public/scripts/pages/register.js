// Get the registration <form> element from the DOM.
var form = document.getElementById("registration-form");
var submitButton = form.querySelector("button");
    
// TODO: Task 1 - Get the password <input> elements from the DOM by ID
// var passwordInput = ...;
// var confirmPasswordInput = ...;
var passwordInput = document.getElementById('password');
var confirmPasswordInput = document.getElementById('confirm-password');

var checkPasswords = function () {
    // TODO: Task 2 - Compare passwordInput value to confirmPasswordInput value
    var hasSamePassword = passwordInput.value === confirmPasswordInput.value;
    if(!hasSamePassword)
    	return confirmPasswordInput.setCustomValidity("Passwords must match");

	confirmPasswordInput.setCustomValidity("");
    

    // TODO: Task 3 - If passwords don't match then display error message on confirmPasswordInput (using setCustomValidity)
    //                If passwords do match then clear the error message (setCustomValidity with empty string)
};

var addPasswordInputEventListeners = function () {
    // TODO: Task 4 - Listen for the "input" event on passwordInput and confirmPasswordInput.
    //       Call the checkPasswords function
    passwordInput.addEventListener('input',checkPasswords);
    confirmPasswordInput.addEventListener('input',checkPasswords);
};

var formSubmissionAttempted = function() {
    form.classList.add("submission-attempted");
};

var addSubmitClickEventListener = function() {
    submitButton.addEventListener("click", formSubmissionAttempted, false);
};

addPasswordInputEventListeners();
addSubmitClickEventListener();