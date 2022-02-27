document.getElementById("signUpForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const message = document.getElementsByClassName("hidden");
    const firstName = document.querySelectorAll('[name="firstName"]')[0].value;
    const lastName = document.querySelectorAll('[name="lastName"]')[0].value;
    const email = document.querySelectorAll('[name="email"]')[0].value;
    const phoneNum = document.querySelectorAll('[name="phoneNum"]')[0].value;
    const password = document.querySelectorAll('[name="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('[name="confirmPassword"]')[0].value;

    
    if (password !== confirmPassword) {
        [...message].map(elem => {
            elem.style.display = "block";
        })

        return false;
    }
    else {
        [...message].map(elem => {
            elem.style.display = "none";
        })
    }

    // log data when form is submited
    console.table({firstName,lastName,email,phoneNum,password});
    
});