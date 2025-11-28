function deleteMe() {
    document.getElementById("myResult").value = " "
}
function calculator(NewValue) {
    let display = document.getElementById("myResult");
    display.value += NewValue;
}
function Answer() {
    const a = document.getElementById("myResult").value;
    const b = eval(a);
    document.getElementById("myResult").value = b;
}

function singleReomve() {
    let input = document.getElementById("myResult");
    input.value = input.value.slice(0, -1);
}