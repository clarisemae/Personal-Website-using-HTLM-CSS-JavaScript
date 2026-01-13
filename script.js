// Heart Icon Toggle
const heartIcon = document.querySelector('.heart-icon');

heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('liked');
});


// Image Carousel Functionality
const images = document.querySelectorAll('.image-carousel img');
const dots = document.querySelectorAll('.dot');

// Loop through all the dots
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        // Remove active class from all images and dots
        images.forEach(image => image.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Add active class to the clicked dot and corresponding image
        const index = dot.getAttribute('data-index');
        images[index].classList.add('active');
        dot.classList.add('active');
    });
});


// JavaScript to create the falling cat rain effect
const animationArea = document.getElementById('animation-area');

function createFallingCats() {
    for (let i = 0; i < 20; i++) { // number of cats
        const cat = document.createElement('img');
        cat.src = 'images/images/cat.png';
        cat.classList.add('cat');
        console.log(cat.src);

        // Append the cat to the animation area
        animationArea.appendChild(cat);

        // Randomize horizontal position
        cat.style.left = `${Math.random() * 100}vw`;
        // Randomize fall duration
        cat.style.animationDuration = `${3 + Math.random() * 5}s`; // Fall time between 3 and 8 seconds
        // Randomize size of the cat
        cat.style.width = `${30 + Math.random() * 40}px`; // Size between 30px and 70px
        // Append the cat to the animation area
        animationArea.appendChild(cat);
    }
}

createFallingCats();