const BOARD_SIZE = 16;
const etchDiv = document.querySelector('#etchDiv');

// 生成像素画板网格
function createEtchBoard() {
    for (let index = 0; index < BOARD_SIZE; index++) {
        const pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.addEventListener('mousedown',colorPixel);
        pixel.addEventListener('mouseover',colorPixelIfDragging);
        etchDiv.appendChild(pixel);
    }
}

// 绘画功能
function colorPixel(e) {
    e.target.classList.add('drawn');
}

// 绘画功能-拖动
function colorPixelIfDragging(e) {
    if (e.buttons === 1) {
        e.target.classList.add('drawn');
    }
}