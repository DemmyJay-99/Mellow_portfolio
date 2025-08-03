const btn = document.getElementById('btn');
const span = document.getElementById('span');
const container = document.getElementById('container');
const form = document.getElementById('form');
let hasSent = false;


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
        name : document.getElementById('name').value.trim(),
        email : document.getElementById('email').value.trim(),
        subject : document.getElementById('subject').value.trim(),
        message : document.getElementById('message').value.trim(),
    };

    const { name, email, subject, message } = templateParams;

    if (!name || !email || !subject || !message) {
        alert("Please fill in all fields.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

    if (hasSent) {
    alert("Message already sent.");
    return;
  }

    showLoader();
    disableForm();


emailjs.send("service_4uxyt5c", "template_ven3kqr", templateParams)
.then(() => {alert("Email sent!");
            form.reset();
            hasSent = true;
        }).catch(() => {alert("Email not sent!")})
          .finally(() => {
    hideLoader();
    enableForm();})
}

