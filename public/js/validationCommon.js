function resetErrors(inputs, errorTexts, errorInfo) {
    for (let i = 0; i < inputs.length; i++) inputs[i].classList.remove("error_input");
    for (let i = 0; i < errorTexts.length; i++) errorTexts[i].innerText = "";
    errorInfo.innerText = "";
}

function checkRequired(value) {
    if (!value) return false;
    value = value.toString().trim();
    if (value === "") return false;
    return true;
}

function checkTextLengthRange(value, min, max) {
    if (!value) return false;
    value = value.toString().trim();
    const length = value.length;
    if (max && length > max) return false;
    if (min && length < min) return false;
    return true;
}

function checkTextLength(value, range) {
    if (!value) return false;
    value = value.toString().trim();
    const length = value.length;
    if (range && length != range) return false;
    return true;
}

function checkNumber(value) {
    if (!value) return false;
    if (isNaN(value)) return false;
    return true;
}

function checkDate(value) {
    if (!value) return false;
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    return pattern.test(value);
}

function checkDateIfAfter(value, compareTo) {
    if (!value) return false;
    if (!compareTo) return false;
    const pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!pattern.test(value)) return false;
    if (!pattern.test(compareTo)) return false;
    return (new Date(value).getTime() < new Date(compareTo).getTime());
}


function stringDateNow() {
    let nowDate = new Date(),
        month = '' + (nowDate.getMonth() + 1),
        day = '' + nowDate.getDate(),
        year = nowDate.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');

}

function YesNo(value) {
    if (!value) return false;
    if (value.toString() != "tak" && value.toString() != "nie") return false;
    return true;

}