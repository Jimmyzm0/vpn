document.addEventListener('DOMContentLoaded', function() {
    // 例如，加载图表或者其他动态数据
});
document.addEventListener('DOMContentLoaded', function() {
    const blessings = [
        可以在加油
        太棒了
        新的一年越来越好
        Merry Christmas and happy holidays!
            努力經營
            努力用心給力 別步後塵
叮叮當叮叮當，鈴兒響叮噹，Merry Christmas! ！
感謝
好的
聖誕魂呂來嘍
好
聖誕快樂～
聖誕快樂
身體健康
想
專屬活動再好點～加油
聖誕快樂 彬彬好料理
在這個燦爛的季節，願你的生活像節日裝飾一樣光彩奪目、充滿色彩！
沒有
在這個聖誕季節，願你的每一刻都像節日的禮物盒一樣，充滿驚喜和喜悅！
謝謝您盡力帶給我們優質的最新消息及獎勵，滿滿的幸福感！
感謝
Merry Xmas 
Hohoho~
祝大家聖誕快樂
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
