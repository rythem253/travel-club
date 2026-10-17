document.addEventListener("DOMContentLoaded", (event) => {

    // 1. Focus and blur events

    // 2. Form validation on submit
    function showError() {

        document.querySelector("button").addEventListener("click", (e) => {

            e.preventDefault();

            //Password error handling
            let errPassword = document.getElementById("password");
            let passContent = errPassword.value;
            let passLen = passContent.length;
            
            const PassErrorSpan = document.getElementById("error-password");

            if (passLen < 8) {
                PassErrorSpan.textContent ="Password must be at least 8 characters";
                PassErrorSpan.style.display = "block";  
            } else {
                PassErrorSpan.textContent = "";
                PassErrorSpan.style.display = "none";
            }

            //Email error handling
            const EmailErrorSpan = document.getElementById("error-email");
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const emailContent = document.getElementById("email");

            if (emailContent.value.trim() === "" || emailRegex.test(emailContent.value) === false) {
                EmailErrorSpan.textContent = "Enter a valid email address";
                EmailErrorSpan.style.display = "block";
            } else {
                EmailErrorSpan.textContent = "";
                EmailErrorSpan.style.display = "none";
            }

            //Username error handling
            const UsrErrorSpan = document.getElementById("error-username");
            const UsrContent = document.getElementById("username"); 
            
            if (UsrContent.value.trim() == "") {
                UsrErrorSpan.textContent = "Enter a valid email address";
                UsrErrorSpan.style.display = "block";
            } else {
                UsrErrorSpan.textContent = "";
                UsrErrorSpan.style.display = "block";
            }

            //Checkbox error handling


        });
    }

    showError();
    // 3. Gallery click events

    // 4. Gallery keyboard events
});