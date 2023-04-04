// Sticky Navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

function sendEmail() {
    Email.send({
        secureToken: "39597797-603f-46ed-ac40-5d0d7d0d6e67",
        Host: "smtp.gmail.com",
        Username: "aashishkumarp3@gmail.com",
        Password: "9669329769",
        To: 'kp854521@gmail.com',
        From: document.getElementById("email").value,
        Subject: "New Contact Form Enquiry",
         Body: "Name: " + document.getElementById("name").value
                + "<br/> Email: " + document.getElementById("email").value
                + "<br/> Phone no:" + document.getElementById("phone").value
                + "<br/> Phone no:" + document.getElementById("phone").value
        }).then(
                message=> alert("Message Sent Succesfully")
          );
        }