export function validateEmail(email) {

    if (email.trim() === "") {
        return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Invalid Email";
    }

    return "";
}

export function validatePassword(password) {

    if (password.trim() === "") {
        return "Password is required";
    }

    if (password.length < 6) {
        return "Password must be at least 6 characters";
    }

    return "";
}


export function clearErrorOnInput(
    inputId,
    errorId
) {

    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);

    input.addEventListener("input", () => {

        if (input.value.trim() !== "") {
            error.innerText = "";
            error.classList.add("display");
        }

    });
}


export function validateDOB(dob) {

    if (!dob) {
        return "Date of Birth is required";
    }

    const selectedDate = new Date(dob);
    const today = new Date();

    if (selectedDate > today) {
        return "DOB cannot be in the future";
    }

    return "";
}