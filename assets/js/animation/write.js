//Efeito máquina de escrever;
const occupation = document.querySelector('#occupation');
const text = occupation.innerHTML
let index = 0

let writeOccupation = () => {
    occupation.innerHTML = occupation.innerHTML.replace('|', '')

    if (text.length > index) {
        if (index == 0) {
            occupation.innerHTML = text.charAt(index);
        } else {
            occupation.innerHTML += text.charAt(index);
        }

        occupation.innerHTML += '|'
        index++
        setTimeout(writeOccupation, 150)
    }
}

writeOccupation()