
const openCardBtn = document.getElementById('openCard');
const card = document.getElementById('card');
const showCakeBtn = document.getElementById('showCake');
const cake = document.getElementById('cake');
const blowCandleBtn = document.getElementById('blowCandle');

openCardBtn.addEventListener('click', () => {
    openCardBtn.style.display = 'none';
    card.classList.remove('hidden');
    launchBalloons();
});

showCakeBtn.addEventListener('click', () => {
    card.style.display = 'none';
    cake.classList.remove('hidden');
});

blowCandleBtn.addEventListener('click', () => {
    cake.innerHTML = "<h2>🎂 Ước nguyện đã được gửi đi! Chúc Linh sinh nhật thật tuyệt vời! 🎂</h2>";
});

function launchBalloons() {
    const balloonContainer = document.getElementById('balloons');
    for (let i = 0; i < 30; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDuration = (Math.random() * 3 + 2) + 's';
        balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 70%)`;
        balloonContainer.appendChild(balloon);
    }
}

const style = document.createElement('style');
style.innerHTML = \`
.balloon {
    position: absolute;
    bottom: -50px;
    width: 20px;
    height: 30px;
    background-color: pink;
    border-radius: 50% 50% 50% 50%;
    animation: rise 5s infinite;
}

@keyframes rise {
    from { transform: translateY(0); }
    to { transform: translateY(-120vh); }
}
\`;
document.head.appendChild(style);
