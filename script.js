const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });

document.querySelectorAll('.fade-up, .edu-item, .project-card, .mini-card').forEach(el => obs.observe(el));
