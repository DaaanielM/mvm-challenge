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

// ------------------ Descuento -------------------
// Consumo de cada cliente
const clienteUno = [400, 250, 300, 150, 350, 300];
const clienteDos = [80, 150, 100, 150, 150, 150];
const clienteTres = [230, 190, 300, 150, 150, 150];

// Porcentajes
const porcentajeUno = 3;
const porcentajeDos = 5;
const porcentajeTres = 10;
const porcentajeCuatro = 10;

const clientes = [clienteUno, clienteDos, clienteTres];
const descuentosClientes = [];

//Ciclo para recorrer cada valor de los clientes
clientes.forEach((cliente, index) => {
	// Objeto donde guardamos el valor del descuento del cliente
	const datoDescuento = {
		cliente: index + 1,
		valor: 0,
	};
	// Ciclo para validar el consumo de los clientes y sacar los descuentos
	cliente.forEach((consumo) => {
		if (consumo <= 50) {
			datoDescuento.valor += porcentajeCuatro;
		} else if (consumo < 100 && consumo >= 50) {
			datoDescuento.valor += porcentajeTres;
		} else if (consumo <= 299 && consumo >= 100) {
			datoDescuento.valor += porcentajeDos;
		} else if (consumo >= 300) {
			datoDescuento.valor += porcentajeUno;
		}
	});

	//Agregamos el objeto con los resultados a un arreglo
	descuentosClientes.push(datoDescuento);
});

// Utilice el método sort para ordemar de mayor a menor
const descuentosClientesOrdenados = descuentosClientes.sort(
	// dos elementos que se comparan del array
	(clienteA, clienteB) => {
		if (clienteA.valor === clienteB.valor) {
			return 0;
		}
		if (clienteA.valor > clienteB.valor) {
			return -1;
		}
		return 1;
	}
);

descuentosClientesOrdenados.forEach((descuento) => {
	console.log(
		`El cliente: ${descuento.cliente}, tuvo un total de descuento en los últimos 6 meses de: ${descuento.valor}%`
	);
});

document.querySelector('#resultado').innerHTML = JSON.stringify(
	descuentosClientesOrdenados
);

alert(
	'En la consola esta más detallada la respuesta del descuento, presione ctrl + shift + i y vaya a console.'
);
// ------------------ Descuento -------------------
