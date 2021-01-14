function validateJudgeForm() {
    const NameInput = document.getElementById('Name');
    const SurnameInput = document.getElementById('Surname');
    const PhoneNumberInput = document.getElementById('PhoneNumber');
    const DateofObtainingQualificationInput = document.getElementById('DateofObtainingQualification');
    const RetiredInput = document.getElementById('Retired');

    const errorName = document.getElementById('errorName');
    const errorSurname = document.getElementById('errorSurname');
    const errorPhoneNumber = document.getElementById('errorPhoneNumber');
    const errorDateofObtainingQualification = document.getElementById('errorDateofObtainingQualification');
    const errorRetired = document.getElementById('errorRetired');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([NameInput, SurnameInput, PhoneNumberInput, DateofObtainingQualificationInput], [errorName, errorSurname, errorPhoneNumber, errorDateofObtainingQualification], errorsSummary);
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
        errorPhoneNumber.innerText = "Pole powinno być liczbą";
    } else if (!checkTextLength(PhoneNumberInput.value, 9)) {
        valid = false;
        PhoneNumberInput.classList.add("error-input");
        errorPhoneNumber.innerText = "Pole powinno zawierać 9 cyfr";
    }
    else {
        PhoneNumberInput.classList.remove("error-input");
    }


    //Retired
    if (!checkRequired(RetiredInput.value)) {
        valid = false;
        RetiredInput.classList.add("error-input");
        errorRetired.innerText = "Pole jest wymagane";
    } else if (!checkTextLength(RetiredInput.value, 3)) {
        valid = false;
        RetiredInput.classList.add("error-input");
        errorRetired.innerText = "Pole powinno zawierać 3 znaki";
    } else if (!YesNo(RetiredInput.value)) {
        valid = false;
        RetiredInput.classList.add("error-input");
        errorRetired.innerText = "Pole powinno zawierac Tak albo Nie";
    }
    else {
        RetiredInput.classList.remove("error-input");
    }


    //Date
    if (!checkRequired(DateofObtainingQualificationInput.value)) {
        valid = false;
        DateofObtainingQualificationInput.classList.add("error-input");
        errorDateofObtainingQualification.innerText = "Pole jest wymagane";
    } else if (!checkDate(DateofObtainingQualificationInput.value)) {
        valid = false;
        DateofObtainingQualificationInput.classList.add("error-input");
        errorDateofObtainingQualification.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
    } else if (!checkDateIfAfter(DateofObtainingQualificationInput.value, stringDateNow())) {
        valid = false;
        DateofObtainingQualificationInput.classList.add("error-input");
        errorDateofObtainingQualification.innerText = "Data nie może być z przyszłości";
    }
    else {
        DateofObtainingQualificationInput.classList.remove("error-input");
    }


    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
        return valid;
    }
}