function sendEmail() {
    const templateParams = {
        name : document.getElementById('name').value,
        email : document.getElementById('email').value,
        subject : document.getElementById('subject').value,
        message : document.getElementById('message').value,
    };

emailjs.send("service_4uxyt5c", "template_ven3kqr", templateParams)
.then(
    () => alert("Email sent!").catch(() => alert("Email not sent!"))
);
}

