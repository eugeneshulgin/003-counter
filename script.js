const	counterNode = document.querySelector('.js_counter');
const	addBtn = document.querySelector('.js_addBtn');
const	cleanBtn = document.querySelector('.js_cleanBtn');

let counter;
counter = 0;

function render(){
	counterNode.innerText = counter;
}
function increment(){
	counter += 1;
}
function clear(){
	counter = 0;
}

render();

addBtn.addEventListener('click', () => {
	increment();
	render();
});

cleanBtn.addEventListener('click', () => {
	clear();
	render();
});