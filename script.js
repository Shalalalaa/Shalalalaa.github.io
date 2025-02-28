// 平滑滚动导航
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 页面加载后动画
window.addEventListener('load', () => {
    document.querySelector('.profile-img').style.opacity = 1;
    document.querySelector('h1').style.transform = 'translateY(0)';
});