const BOARD_SIZE = 16;
const etchDiv = document.querySelector('#etchDiv');
const resetButton = document.querySelector('#reset-btn');

// 生成像素画板网格
function createEtchBoard() {
    // 清空旧网格
    etchDiv.innerHTML = '';
    for (let createRow = 0; createRow < BOARD_SIZE; createRow++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let index = 0; index < BOARD_SIZE; index++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.addEventListener('mousedown',colorPixel);
            pixel.addEventListener('mouseover',colorPixelIfDragging);
            row.appendChild(pixel);
            
        }  
        etchDiv.appendChild(row);
    }
}

// 绘画功能
function colorPixel(e) {
    e.target.classList.add('drawn');
    e.preventDefault();
}

// 绘画功能-拖动
function colorPixelIfDragging(e) {
    if (e.buttons === 1) {
        e.target.classList.add('drawn');
    }
}

// 重置功能
function resetBoard() {
    createEtchBoard();
}

document.addEventListener('DOMContentLoaded',createEtchBoard);
resetButton.addEventListener('click',resetBoard);