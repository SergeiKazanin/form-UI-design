
window.onload = int;



function int() {
    const inputs = document.querySelectorAll('.opt-card-inputs input');
    const button = document.querySelector('.opt-card button')
    inputs.forEach(input => {
        let lastInputStatus = 0;
        input.onkeyup = (e) => {
            const currentElemet = e.target;
            const nextElement = input.nextElementSibling;
            const prevElement = input.previousElementSibling;
            if (prevElement && e.keyCode === 8) {
                if (lastInputStatus === 1) {
                    prevElement.value = '';
                    prevElement.focus();
                }
                button.setAttribute('disabled', true);
                lastInputStatus = 1;
            } else {
                const reg = /\d/
                if (!reg.test(currentElemet.value)) {
                    currentElemet.value = currentElemet.value.replace(/\D/g, "");
                } else if (currentElemet.value) {
                    if (nextElement) {
                        nextElement.focus();
                    } else {
                        button.removeAttribute('disabled');
                        lastInputStatus = 0;
                    }

                }
            }
        }
    })

}