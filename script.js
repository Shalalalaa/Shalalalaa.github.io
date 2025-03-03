// 移动端汉堡菜单功能
document.getElementById('menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('show');
});

document.getElementById('toggleViewBtn').addEventListener('click', function() {
    const projectsContainer = document.getElementById('projectsContainer');
    const isCarouselView = projectsContainer.classList.contains('carousel-view');

    if (isCarouselView) {
        projectsContainer.classList.remove('carousel-view');
        projectsContainer.classList.add('grid-view');
        this.textContent = "Switch to Carousel View";
    } else {
        projectsContainer.classList.remove('grid-view');
        projectsContainer.classList.add('carousel-view');
        this.textContent = "Switch to Grid View";
    }
});
