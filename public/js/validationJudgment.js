function validateJudgmentForm() {
    const DateInput = document.getElementById('Date');
    const DescriptionInput = document.getElementById('Description');
    const VerdictInput = document.getElementById('Verdict');
    const PenaltyInput = document.getElementById('Penalty');
    const ChargeIDInput = document.getElementById('ChargeID');
    const GpersonIDInput = document.getElementById('GpersonID');

    const errorDate = document.getElementById('errorDate');
    const errorDescription = document.getElementById('errorDescription');
    const errorVerdict = document.getElementById('errorVerdict');
    const errorPenalty = document.getElementById('errorPenalty');
    const errorChargeID = document.getElementById('errorChargeID');
    const errorGpersonID = document.getElementById('errorGpersonID');
    const errorsSummary = document.getElementById('errorsSummary');
    resetErrors([DateInput,
        DescriptionInput,
        VerdictInput,
        PenaltyInput,
        ChargeIDInput,
        GpersonIDInput],
        [errorDate,
            errorDescription,
            errorVerdict,
            errorPenalty,
            errorChargeID,
            errorGpersonID,
        ],
        errorsSummary);
    let valid = true;
    //Date
    if (!checkRequired(DateInput.value)) {
        valid = false;
        DateInput.classList.add("error-input");
        errorDate.innerText = "Pole jest wymagane";
    } else if (!checkDate(DateInput.value)) {
        valid = false;
        DateInput.classList.add("error-input");
        errorDate.innerText = "Pole powinno zawierać datę w formacie yyyy-mm-dd";
    } else if (!checkDateIfAfter(DateInput.value, stringDateNow())) {
        valid = false;
        DateInput.classList.add("error-input");
        errorDate.innerText = "Data nie może być z przyszłości";
    }
    else {
        DateInput.classList.remove("error-input");
    }

    //Desc
    if (!checkRequired(DescriptionInput.value)) {
        valid = false;
        DescriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(DescriptionInput.value, 10, 500)) {
        valid = false;
        DescriptionInput.classList.add("error-input");
        errorDescription.innerText = "Pole powinno zawierać od 10 do 500 znaków";
    }
    else {
        DescriptionInput.classList.remove("error-input");
    }

    //Verdict
    if (!checkRequired(VerdictInput.value)) {
        valid = false;
        VerdictInput.classList.add("error-input");
        errorVerdict.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(VerdictInput.value, 2, 60)) {
        valid = false;
        VerdictInput.classList.add("error-input");
        errorVerdict.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }
    else {
        VerdictInput.classList.remove("error-input");
    }

    //Penalty
    if (!checkRequired(PenaltyInput.value)) {
        valid = false;
        PenaltyInput.classList.add("error-input");
        errorPenalty.innerText = "Pole jest wymagane";
    } else if (!checkNumber(PenaltyInput.value)) {
        valid = false;
        PenaltyInput.classList.add("error-input");
        errorPenalty.innerText = "Pole powinno być cyfra";
    }
    else {
        PenaltyInput.classList.remove("error-input");
    }




    //Charge
    if (!checkRequired(ChargeIDInput.value)) {
        valid = false;
        ChargeIDInput.classList.add("error-input");
        errorChargeID.innerText = "Pole jest wymagane";
    }
    else {
        ChargeIDInput.classList.remove("error-input");
    }


    //Gperson
    if (!checkRequired(GpersonIDInput.value)) {
        valid = false;
        GpersonIDInput.classList.add("error-input");
        errorGpersonID.innerText = "Pole jest wymagane";
    }
    else {
        GpersonIDInput.classList.remove("error-input");
    }



    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
        return valid;
    }
}