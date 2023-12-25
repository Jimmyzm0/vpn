document.addEventListener('DOMContentLoaded', function() {
    // 例如，加载图表或者其他动态数据
});
document.addEventListener('DOMContentLoaded', function() {
    const blessings = [
        // 您的祝福语数组
    ];

    const container = document.getElementById('blessings-container');
    const showMoreBtn = document.getElementById('show-more');

    for (let i = 0; i < Math.min(blessings.length, 10); i++) {
        const p = document.createElement('p');
        p.textContent = blessings[i];
        container.appendChild(p);
    }

    showMoreBtn.addEventListener('click', function() {
        if (container.style.maxHeight) {
            container.style.maxHeight = null;
            this.textContent = '显示更多';
        } else {
            container.style.maxHeight = container.scrollHeight + 'px';
            this.textContent = '显示较少';
        }
    });
});
