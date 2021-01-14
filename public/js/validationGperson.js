function validateGpersonForm() {
    const NameInput = document.getElementById('Name');
    const SurnameInput = document.getElementById('Surname');
    const PhoneNumberInput = document.getElementById('PhoneNumber');
    const PESELInput = document.getElementById('PESEL');
    const DateofBirthInput = document.getElementById('DateofBirth');
    const ResidenceInput = document.getElementById('Residence');

    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorPhoneNumber = document.getElementById('errorPhoneNumber');
    const errorPESEL = document.getElementById('errorPESEL');
    const errorDateofBirth = document.getElementById('errorDateofBirth');
    const errorResidence = document.getElementById('errorResidence');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([NameInput, SurnameInput, PhoneNumberInput, PESELInput, DateofBirthInput, ResidenceInput], [errorName, errorSurname, errorPhoneNumber, errorPESEL, errorDateofBirth, errorResidence], errorsSummary);
    let valid = true;
    //Name
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

    //Surname
    if (!checkRequired(SurnameInput.value)) {
        valid = false;
        SurnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(SurnameInput.value, 2, 60)) {
        valid = false;
        SurnameInput.classList.add("error-input");
        errorSurname.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    else {
        SurnameInput.classList.remove("error-input");
    }

    //Phone
    if (!checkRequired(PhoneNumberInput.value)) {
        valid = false;
        PhoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "Pole jest wymagane";
    } else if (!checkNumber(PhoneNumberInput.value)) {
        valid = false;
        PhoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "Pole powinno być cyfra";
    } else if (!checkTextLength(PhoneNumberInput.value, 9)) {
        valid = false;
        PhoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "Pole powinno zawierać 9 cyfr";
    }
    else {
        PhoneNumberInput.classList.remove("error-input");
    }

    //PESEL
    if (!checkRequired(PESELInput.value)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole jest wymagane";
    } else if (!checkNumber(PESELInput.value)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole powinno być liczbą";
    } else if (!checkTextLength(PESELInput.value, 11)) {
        valid = false;
        PESELInput.classList.add("error-input");
        errorPESEL.innerText = "Pole powinno zawierać 11 cyfr";
    }
    else {
        PESELInput.classList.remove("error-input");
    }

    //Date of birth
    if (!checkRequired(DateofBirthInput.value)) {
        valid = false;
        DateofBirthInput.classList.add("error-input");
        errorDateofBirth.innerText = "Pole jest wymagane";
    } else if (!checkDate(DateofBirthInput.value)) {
        valid = false;
        DateofBirthInput.classList.add("error-input");
        errorDateofBirth.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
    } else if (!checkDateIfAfter(DateofBirthInput.value, stringDateNow())) {
        valid = false;
        DateofBirthInput.classList.add("error-input");
        errorDateofBirth.innerText = "Data nie może być z przyszłości";
    }
    else {
        DateofBirthInput.classList.remove("error-input");
    }

    //Residance
    if (!checkRequired(ResidenceInput.value)) {
        valid = false;
        ResidenceInput.classList.add("error-input");
        errorResidence.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(ResidenceInput.value, 3, 100)) {
        valid = false;
        ResidenceInput.classList.add("error-input");
        errorResidence.innerText = "Pole powinno zawierać od 3 do 100 znaków";
    }
    else {
        ResidenceInput.classList.remove("error-input");
    }

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
        return valid;
    }
}