const lanterns = document.querySelectorAll('.lantern');
const modal = document.getElementById('messageModal');
const messageText = document.getElementById('messageText');
const closeBtn = document.querySelector('.close-btn');

lanterns.forEach(lantern => {
    lantern.addEventListener('click', () => {
        const msg = lantern.getAttribute('data-message');
        messageText.innerText = msg;
        modal.style.display = 'flex';
        lantern.style.animationPlayState = 'paused';
    });
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
    lanterns.forEach(l => l.style.animationPlayState = 'running');
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
        lanterns.forEach(l => l.style.animationPlayState = 'running');
    }
};