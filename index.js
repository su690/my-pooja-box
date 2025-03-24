const scrollContainer = document.getElementById("scrollContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: 150, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
    scrollContainer.scrollBy({ left: -150, behavior: "smooth" });
});

// Enable touch swipe for mobile
let startX;
scrollContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
});

scrollContainer.addEventListener("touchmove", (e) => {
    let moveX = e.touches[0].clientX;
    let diff = startX - moveX;
    scrollContainer.scrollLeft += diff * 0.5;
    e.preventDefault();
});
