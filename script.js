document.addEventListener("DOMContentLoaded", (event) => {

    // 1. Focus and blur events
    function blurUX() {

        const changeUX = document.querySelectorAll("#username, #email, #password");

        changeUX.forEach(changeUX => {
            changeUX.addEventListener("focus", () => {
                changeUX.style.backgroundColor = '#fffae0';
            });

            changeUX.addEventListener("blur", () => {
                changeUX.style.backgroundColor = "";
            });
        });
    }
    // 2. Form validation on submit
    function showError() {

        const form = document.getElementById("signup-form");
        
        document.getElementById("signup-form").addEventListener("submit", (e) => {

            e.preventDefault();
            let isValid = true;

            //Password error handling
            const errPassword = document.getElementById("password");
            const passContent = errPassword.value;
            const passLen = passContent.length;

            const PassErrorSpan = document.getElementById("error-password");

            if (passLen < 8) {
                PassErrorSpan.textContent = "Password must be at least 8 characters";
                errPassword.classList.add("error-border");
                PassErrorSpan.style.display = "block";
                isValid = false
            } else {
                PassErrorSpan.textContent = "";
                PassErrorSpan.style.display = "none";
                errPassword.classList.remove("error-border");
            }

            //Email error handling
            const EmailErrorSpan = document.getElementById("error-email");
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const emailContent = document.getElementById("email");

            if (emailContent.value.trim() === "" || emailRegex.test(emailContent.value) === false) {
                EmailErrorSpan.textContent = "Enter a valid email address";
                emailContent.classList.add("error-border");
                EmailErrorSpan.style.display = "block";
                isValid = false;
            } else {
                EmailErrorSpan.textContent = "";
                EmailErrorSpan.style.display = "none";
                emailContent.classList.remove("error-border");
            }

            //Username error handling
            const UsrErrorSpan = document.getElementById("error-username");
            const UsrContent = document.getElementById("username");

            if (UsrContent.value.trim() == "") {
                UsrErrorSpan.textContent = "Username is required";
                UsrContent.classList.add("error-border");
                UsrErrorSpan.style.display = "block";
                isValid = false
            } else {
                UsrErrorSpan.textContent = "";
                UsrErrorSpan.style.display = "none";
                UsrContent.classList.remove("error-border");
            }

            //Checkbox error handling
            const checkBox = document.getElementById("terms");
            const ChkbxErrorSpan = document.getElementById("error-terms");

            if (checkBox.checked) {
                ChkbxErrorSpan.textContent = ""; 
                ChkbxErrorSpan.style.display = "none"
                checkBox.parentElement.classList.remove("error-border");
            } else {
                ChkbxErrorSpan.style.display = "block";
                ChkbxErrorSpan.textContent = "You must accept the terms";
                checkBox.parentElement.classList.add("error-border");
                isValid = false;
            }

            if (isValid === true) {
                alert("Registration successfull");
            }

        });
    }

    // 3. Gallery click events 
    function galleryExpand() {

        const pictures = document.querySelectorAll(".thumb");
        const caption = document.getElementById("image-caption");

        pictures.forEach(tile => {
            tile.addEventListener("click", () => {

                pictures.forEach(pic => {
                    pic.classList.remove("expanded");
                });

                tile.classList.add("expanded");
                caption.textContent = "This shot is from: " + tile.dataset.city;
            });

                tile.addEventListener("keydown", (event) => {
                    if (event.key === "Enter") {

                        pictures.forEach(pic => {
                            pic.classList.remove("expanded");
                        });

                        tile.classList.add("expanded");
                        caption.textContent = "This shot is from: " + tile.dataset.city;
                    }
            });
        });
    }

    // 4. Gallery keyboard events

    showError();
    blurUX();
    galleryExpand();

});