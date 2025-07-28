const filterButtons = document.querySelectorAll(".filter-btn");
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.getElementById("closeLightbox");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
const backToTop = document.getElementById("backToTop");

let currentImageIndex = 0;

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const category = button.dataset.category;

    images.forEach(img => {
      const match = img.dataset.category === category || category === "all";
      img.style.display = match ? "block" : "none";
    });
  });
});

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightboxImage.src = img.src;
    lightbox.classList.add("active");
    currentImageIndex = index;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  lightboxImage.src = images[currentImageIndex].src;
});

prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  lightboxImage.src = images[currentImageIndex].src;
});

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 300);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
