const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => navLinks.classList.toggle("open"));

document.querySelectorAll(".nav-links a").forEach(a => 
    a.addEventListener("click", () => navLinks.classList.remove("open"))
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("show");
    });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// Safe check for footer year element
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Badges Show More / Show Less Toggle Function
function toggleBadges() {
    const hiddenBadges = document.querySelectorAll('.journey-grid .hidden-badge');
    const btn = document.getElementById('toggleBadgesBtn');
    
    if (!hiddenBadges.length || !btn) return;

    let isHidden = window.getComputedStyle(hiddenBadges[0]).display === 'none';

    if (isHidden) {
        hiddenBadges.forEach(badge => badge.style.display = 'flex');
        btn.textContent = 'Show Less ↑';
    } else {
        hiddenBadges.forEach(badge => badge.style.display = 'none');
        btn.textContent = 'Show More Badges ↓';
    }
}
