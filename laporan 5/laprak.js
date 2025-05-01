document.addEventListener('DOMContentLoaded', function () {
    console.log("Portofolio siap ditampilkan!");

    // Ambil semua gambar dengan kelas "experience-image"
    const images = document.querySelectorAll('img');

images.forEach(image => {

    image.addEventListener('mouseenter', () => {
        image.classList.add('active');
    });

    image.addEventListener('mouseleave', () => {
        image.classList.remove('active');
    });
});

    // Efek hover untuk section "about"
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('mouseover', () => {
        aboutSection.style.background = '#82eedf';
    });

    aboutSection.addEventListener('mouseout', () => {
        aboutSection.style.background = 'linear-gradient(135deg,rgb(0, 0, 0),rgb(252, 252, 252))';
    });
});
