// HEART ICON TOGGLE (Updated for ALL cards)
const allHeartIcons = document.querySelectorAll('.heart-icon');

allHeartIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('liked');
    });
});


// IMAGE CAROUSEL (Home Section)

const images = document.querySelectorAll('.image-carousel img');
const dots = document.querySelectorAll('.dot');

if (dots.length > 0) { // Only run if dots exist
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            // Remove active class from all images and dots
            images.forEach(image => image.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            // Add active class to the clicked dot and corresponding image
            const index = dot.getAttribute('data-index');
            if(images[index]) {
                images[index].classList.add('active');
            }
            dot.classList.add('active');
        });
    });
}


// FALLING CAT RAIN EFFECT

const animationArea = document.getElementById('animation-area');

function createFallingCats() {
    if (!animationArea) return; // Stop if area doesn't exist

    for (let i = 0; i < 20; i++) {
        const cat = document.createElement('img');
        cat.src = 'images/images/cat.png'; 
        cat.classList.add('cat');

        animationArea.appendChild(cat);

        // Randomize horizontal position
        cat.style.left = `${Math.random() * 100}vw`;
        // Randomize fall duration (3s to 8s)
        cat.style.animationDuration = `${3 + Math.random() * 5}s`;
        // Randomize size (30px to 70px)
        cat.style.width = `${30 + Math.random() * 40}px`;
    }
}

createFallingCats();


// ACTIVE HEADER LINK (SCROLL SPY)
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
};