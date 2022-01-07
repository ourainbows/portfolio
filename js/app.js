VanillaTilt.init(document.querySelectorAll(".tech__card")), {
    max: 15,
    speed: 400,

}


/* Formulario */
let sendEmail = document.querySelector("#sendEmail")
sendEmail.addEventListener("click", function (e) {
    /* Don't reload page when button is press */
    e.preventDefault()
    /* Obtain input values */
    let name = document.getElementById("nameForm").value
    let email = document.getElementById("emailForm").value
    let message = document.getElementById("textForm").value

    window.location.href = `mailto:casasjuanfelipe@gmail.com?subject=${name}, interesado en contactarte&body=Email: ${email}%0A${message}`
})