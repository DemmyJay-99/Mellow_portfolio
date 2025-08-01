const btn = document.getElementById('btn');
const span = document.getElementById('span');
const container = document.getElementById('container');


function showLoader() {
    container.style.display ='block';
    span.style.display = 'none';
}

function hideLoader() {
    container.style.display ='none';
    span.style.display = 'block';  
}

function disableForm() {
    btn.disabled = true;
}

function enableForm() {
    btn.disabled = false;
}











function sendEmail() {
    const templateParams = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    };

    showLoader();
    disableForm();


emailjs.send("service_4uxyt5c", "template_ven3kqr", templateParams)
.then(() => alert("Email sent!")).catch(() => alert("Email not sent!")).finally(() => {
    hideLoader();
    enableForm();})
}

