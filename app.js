const submitEmail = document.querySelector('.submit-email')
const inputEmail = document.querySelector('.input-email')
const messageError = document.getElementById('error-email')
const container = document.querySelector('.container')
const modal = document.querySelector('.modal')

submitEmail.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInput = inputEmail.value
    const validateEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;


    if (validateEmail.test(valueInput)) {
        container.classList.add('container-modal')
        modal.classList.add('modal-content')

        const modalEmail = document.createElement('span');
        modalEmail.classList.add('modal-p')
        modalEmail.innerHTML = `A confirmation email has been sent to ${valueInput}. Please open it  and click this button inside to confirm your subscription`
        modal.appendChild(modalEmail)

        const submitEmailMessage = document.createElement('input');
        submitEmailMessage.classList.add("modal-submit")
        submitEmailMessage.type = 'submit'
        submitEmailMessage.value = 'Dismiss message'
        submitEmailMessage.addEventListener('click', () => {
            location.reload()
        })
        modal.appendChild(submitEmailMessage)


    } else {
        inputEmail.classList.add('input-email-error')
        messageError.classList.add('error-email-message')

    }
})
