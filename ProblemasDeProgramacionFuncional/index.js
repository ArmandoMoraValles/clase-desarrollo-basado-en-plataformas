const data = require('./data.json')

/* 1) Número de productos con existencia mayor a 20. */ 

const productosConExistenciaMayorA20 = data.filter(producto => producto.existencia > 20);
console.log(`Tenemos ${productosConExistenciaMayorA20.length} productos con existencia mayor a 20`);

/* 2) Número de productos con existencia menos a 15. */

const productosConExistenciaMenosA15 = data.filter(producto => producto.existencia < 15);
console.log(`Tenemos ${productosConExistenciaMenosA15.length} productos con existencia menos a 15`);

/* 3) Lista de productos con la misma clasificación y precio mayor 15.50. */

const productosConMismaClasificacionYPrecioMayorA1550 = data.reduce((productos, producto) => {
  if (producto.precio > 15.50) {
    if (!productos[producto.clasificacion]) {
      productos[producto.clasificacion] = [];
    }
    productos[producto.clasificacion].push(producto);
  }
  return productos;
}, {});

console.log(`Tenemos ${Object.keys(productosConMismaClasificacionYPrecioMayorA1550).length} grupos de productos con la misma clasificación y precio mayor a 15.50`);

/* 4) Lista de productos con precio mayor a 20.30 y menor a 45.00. */

const productosConPrecioMayorA2030YMenoA4500 = data.filter(producto => producto.precio > 20.30 && producto.precio < 45.00);
console.log(`Tenemos ${productosConPrecioMayorA2030YMenoA4500.length} productos con precio mayor a 20.30 y menor a 45.00`);

/* 5) Número de productos agrupados por su clasificación. */

const productosAgrupadosPorClasificacion = data.reduce((productos, producto) => {
  if (!productos[producto.clasificacion]) {
    productos[producto.clasificacion] = 0;
  }
  productos[producto.clasificacion]++;
  return productos;
}, {});

console.log(`Tenemos ${Object.keys(productosAgrupadosPorClasificacion).length} grupos de productos agrupados por su clasificación`);