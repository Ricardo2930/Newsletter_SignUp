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

        modal.innerHTML = 
        `
        <img src="./assets/images/icon-success.svg" class="modal-image" alt="">
        <h2 class="modal-title">Thanks for subscribing!</h2>
        <h5 class="modal-p">
        A confirmation email has been sent to <span class="span-modal">${valueInput}</span>. Please open it  and click this button inside to confirm your subscription
        </h5>
        `

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
