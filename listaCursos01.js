
let cursos = [{
		id: '1',
		nombre: 'Comercio Internacional',
		tiempo: '20',
		valor: '50.000',
	},
	{
		id: '2',
		nombre: 'Seguridad informática',
		tiempo: '15',
		valor: '100.000',
	},
	{
		id: '3',
		nombre: 'Administracion',
		tiempo: '30',
		valor: '250.000',
	}
];

let mostarCurso = (curso, tiempo) => {
	setTimeout(function(){
		console.log('Curso Nro. ' + curso.id + ' - ' + curso.nombre + ' tiene una duracion de ' + curso.tiempo + ' horas, y un valor de ' + curso.valor);
	}, tiempo);
}



mostarCurso(cursos[0], 2000);
mostarCurso(cursos[1], 4000);
mostarCurso(cursos[2], 6000);










