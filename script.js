/* ================================
   🌐 Navbar Scroll Effect
================================ */
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});


/* ================================
   🔗 Smooth Scroll Navigation
================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.getAttribute('href'));

        if(targetElement){
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }

        // Close navbar on mobile
        document.querySelector('.navbar-collapse')?.classList.remove('show');
    });
});


/* ================================
   ⬆ Back To Top Button
================================ */
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    backToTopButton.classList.toggle('active', window.pageYOffset > 300);
});

backToTopButton.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ================================
   🎞 Scroll Animation on Elements
================================ */
function animateOnScroll() {
    const elements = document.querySelectorAll('.timeline-item, .project-card, .testimonial-card, .blog-card');
    const screenPosition = window.innerHeight / 1.3;

    elements.forEach(element => {
        if (element.getBoundingClientRect().top < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial state
document.querySelectorAll('.timeline-item, .project-card, .testimonial-card, .blog-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


/* ================================
   🌀 Swiper Projects Slider
================================ */
var swiper = new Swiper(".myProjects", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,

    autoplay: {
        delay: 900,
        disableOnInteraction: false
    },

    speed: 300,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        991: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        0:   { slidesPerView: 1 }
    }
});


/* ======================================================
   📩 Contact Form - Send Email using EmailJS
   (THIS PART IS NEWLY ADDED FOR YOU)
======================================================*/

(function(){
    emailjs.init("JcxU3mWPW-iWetkRC"); // <-- Replace here
})();

document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("number").value,
        subject: document.getElementById("Subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_9iy1evk", "template_h8yfytq", params)
    .then(() => {
    Swal.fire({
        icon: "success",
        title: "Message Sent Successfully!",
        text: "Thank you for contacting me 😊",
        confirmButtonText: "OK",
        timer: 800
    });

    document.getElementById("contactForm").reset();
})
.catch((error) => {
    Swal.fire({
        icon: "error",
        title: "Failed to Send!",
        text: "Something went wrong, please try again ❗",
        confirmButtonText: "Close"
    });

    console.log(error);
});

});
