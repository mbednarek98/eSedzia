function validateChargeForm() {
    const NameInput = document.getElementById('Name');
    const TypeInput = document.getElementById('Type');
    const DescriptionInput = document.getElementById('Description');
    const errorName = document.getElementById('errorName');
    const errorType = document.getElementById('errorType');
    const errorDescription = document.getElementById('errorDescription');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([NameInput, TypeInput, DescriptionInput], [errorName, errorType, errorDescription], errorsSummary);
    let valid = true;
    if (!checkRequired(NameInput.value)) {
        valid = false;
        NameInput.classList.add("error-input");
        errorName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(NameInput.value, 2, 60)) {
        valid = false;
        NameInput.classList.add("error-input");
        errorName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    else {
        NameInput.classList.remove("error-input");
    }

    if (!checkRequired(TypeInput.value)) {
        valid = false;
        TypeInput.classList.add("error-input");
        errorType.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(TypeInput.value, 2, 60)) {
        valid = false;
        TypeInput.classList.add("error-input");
        errorType.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    else {
        TypeInput.classList.remove("error-input");
    }

    if (!checkRequired(DescriptionInput.value)) {
        valid = false;
        DescriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(DescriptionInput.value, 20, 500)) {
        valid = false;
        DescriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole powinno zawierać od 20 do 500 znaków";
    }
    else {
        DescriptionInput.classList.remove("error-input");
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
        return valid;
    }
}