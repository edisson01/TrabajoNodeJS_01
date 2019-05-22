const fs = require('fs');
const {cursos, mostarCurso} = require ('./lista_cursos');


const datos = {
	id:{
		demand: true,
		alias: 'i'
	},
	nombre:{
		demand: true,
		alias: 'n'
	},
	cedula:{
		demand: true,
		alias: 'c'
	}
}

mostarCurso(cursos[0], 0);
mostarCurso(cursos[1], 0);
mostarCurso(cursos[2], 0);

const argv = require('yargs')
            .command('inscribir','Inscripcion curso', datos)
			.argv


function validarDatos(datoEntrada){

	if(datoEntrada.id != null){
		if(datoEntrada.id < 1 || datoEntrada.id > 3 ){
			console.log('Seleccione un id de curso valido...');
		}else{
			console.log('Buscando curso: ' + datoEntrada.id);
			consultarCurso(datoEntrada.id, function(curso){
				if(curso == null){
					console.log('CURSO NO EXISTE..')
				}else{
					guardarRegistroInscripcion(curso, datoEntrada)
				}
				
			});
		}
	}
}

function guardarRegistroInscripcion(curso, datoEntrada){

	registro = 'Usuario: ' + datoEntrada.cedula + ': ' + datoEntrada.nombre + '\n' + 
	           'Curso: ' + curso.id + ' - ' + curso.nombre + ' - ' + curso.tiempo + ' - ' + curso.valor 

	fs.writeFile('inscipciones.txt', registro, (err) => {
		if(err) trow (err);
		console.log('La inscripcion al curso se almaceno en el archivo.')
	});
}

let consultarCurso = (idCurso, callback)=>{
	let curso = cursos.find( curso => curso.id == idCurso);
	callback(curso);
} 

validarDatos(argv);







