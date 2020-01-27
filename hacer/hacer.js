const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
  const data = JSON.stringify(listadoPorHacer);
  fs.writeFile('db/data.json', data, err => {
    if (err) console.log(err);
  });
};

const cargarDB = () => {
  try {
    listadoPorHacer = require('../db/data.json');
  } catch (error) {
    listadoPorHacer = [];
  }
};

const crear = descripcion => {
  cargarDB();
  const porHacer = {
    descripcion,
    completado: false
  };
  listadoPorHacer.push(porHacer);
  guardarDB();
  return porHacer;
};

const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado = true) => {
  cargarDB();
  const index = listadoPorHacer.findIndex(
    tarea => tarea.descripcion === descripcion
  );
  if (index >= 0) {
    listadoPorHacer[index].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = descripcion => {
  cargarDB();
  const nuevoListado = listadoPorHacer.filter(
    tarea => tarea.descripcion !== descripcion
  );
  if (listadoPorHacer.length===nuevoListado.length) {
   return false
  } else {
    listadoPorHacer=nuevoListado;
    guardarDB();
    return true;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
};
