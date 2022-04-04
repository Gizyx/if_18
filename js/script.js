var formEl = document.forms[0];

formEl.addEventListener('submit', over18)

function over18(e) {
    e.preventDefault();
    if(formEl.Age.value >= 18) {
        if (formEl.Age.value > 30) {
            console.log("Hallo der mr/mrs snart støv")
        } else {
        console.log("Du kan få lappen!")}
    }else if(formEl.Age.value < 18) {
        console.log("Du er en liten baby -_-")
    }
}   