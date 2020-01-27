const argv = require('./config/yargs').argv;
const porHacer = require('./hacer/hacer');
const colors = require('colors');
const comando = argv._[0];

switch (comando) {
  case 'crear':
    let tarea = porHacer.crear(argv.descripcion);
    console.log(tarea);
    break;
  case 'listar':
    const listado = porHacer.getListado();
    for (const tarea of listado) {
      console.log('=======Por hacer======='.green);
      console.log(tarea.descripcion);
      console.log('Estado :' + tarea.completado);
      console.log('======================='.green);
    }

    break;
  case 'actualizar':
    const actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
    break;
  case 'borrar':
    const borrar = porHacer.borrar(argv.descripcion);
    console.log(borrar);
    break;
  default: 
    console.log('no es un comando conocido');

    break;
}
