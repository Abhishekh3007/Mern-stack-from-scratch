const countEl = document.getElementById('count');
const upBtn = document.getElementById('upBtn');
const downBtn = document.getElementById('downBtn');

let count = 0;

function renderCount() {
	countEl.textContent = count;
}

upBtn.addEventListener('click', () => {
	count += 1;
	renderCount();
});

downBtn.addEventListener('click', () => {
	count -= 1;
	renderCount();
});

renderCount();
