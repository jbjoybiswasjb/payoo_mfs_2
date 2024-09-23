// Get input value by id.
function getInputValueById(id) {
    const value = document.getElementById(id).value;

    const valueNumber = parseFloat(value);
    return valueNumber;
}