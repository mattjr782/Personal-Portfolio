document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.rotate p');
    if (!items.length) return;
    let current = 0;

    // show only the first initially
    items.forEach((p, i) => p.classList.toggle('active', i === 0));

    const displayTime = 3000; // ms each item stays visible

    setInterval(() => {
        items[current].classList.remove('active');
        current = (current + 1) % items.length;
        items[current].classList.add('active');
    }, displayTime);
});
