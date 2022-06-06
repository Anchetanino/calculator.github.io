let result = document.getElementById('result');
let history = document.getElementById('history');
let numpad = Array.from(document.getElementsByClassName('pad'));
numpad.map(pad => {
    pad.addEventListener('click', (e) => {
        history.innerText = " ";
        switch (e.target.innerText) {
            case 'AC':
                result.innerText = " ";
                history.innerText = " ";
                break;
            case '=':
                try {

                    history.innerText += result.innerText;

                    result.innerText = eval(result.innerText);
                } catch {
                    result.innerText = "Invalid Equation!";

                }
                break;
            case "C":
                result.innerText = result.innerText.slice(0, -1);
                break;
            default:
                result.innerText += e.target.innerText;
        }
    })
})