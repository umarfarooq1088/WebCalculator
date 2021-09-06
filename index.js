let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
// let bg1 = document.querySelector('body');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        let colors = '#';
        colors += Math.random().toString(16).slice(2, 8);
        // bg1.style.backgroundcolor = colors;
        console.log(colors);
        document.body.style.backgroundColor = colors;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        } else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        } else if (buttonText == '=') {
            screen.value = eval(screenValue);
        } else {
            screenValue += buttonText;
            screen.value = screenValue;
        }



    })
}