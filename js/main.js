// ----------------- Menu navbar ------------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
	n.addEventListener('click', () => {
		hamburger.classList.remove('active');
		navMenu.classList.remove('active');
	})
);
// ----------------- Menu navbar ------------------

// ------------------ Factorial -------------------
const form = document.getElementById('form');

form.addEventListener('submit', calcular);

function calcular(e) {
	e.preventDefault();
	let num = parseInt(document.getElementById('num').value);

	let factorial = 1;

	for (let i = 1; i <= num; i++) {
		factorial = factorial * i;
	}
	const result = document.getElementById('result');
	result.textContent = `El factorial de ${num} es: ${factorial}`;

	form.reset();
}
// ------------------ Factorial -------------------
