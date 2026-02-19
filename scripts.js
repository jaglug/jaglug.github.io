// Плавный скролл
document.querySelector(".scroll-btn").addEventListener("click", function() {
    document.querySelector("#works").scrollIntoView({
        behavior: "smooth"
    });
});

// Карусель
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-item-custom");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentIndex].classList.add("active");
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

// Автопрокрутка
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
}, 6000);

// Плавное появление секций при скролле
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(60px)";
    section.style.transition = "1s ease";
    observer.observe(section);
});
