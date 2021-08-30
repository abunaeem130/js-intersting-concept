function wellComeMesage(name, greetHandler) {

    greetHandler(name);
}
// const names = ['tom hangs', 'tom buddy', ' tom cruch', 'tom lava']
// const myObject = { name: 'tom chinko', age: 34 }
function greetMorning(name) {
    console.log('good morning', name)
}
function greetEvening(name) {
    console.log('good evening', name)
}
function greetAfterNoon(name) {
    console.log('good after noon', name)
}
wellComeMesage('tom hanks', greetMorning);
wellComeMesage('sakib  hanks', greetAfterNoon);
wellComeMesage('tom crucks', greetEvening);

function handleClick() {
    console.log('button is click')
}

document.getElementById('my-btn').addEventListener('click', handleClick)
document.getElementById('my btn').addEventListener('click', function () {
    console.log('button is clicked');
})