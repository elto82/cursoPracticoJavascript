const lista1 = [
  1,
  3,
  5,
  6,
  6,
  8,
  9,
  3,
  8,
  4,
  7,
  6,
  11,
  45,
  3,
  7,
  8,
  2,
  2,
  3,
  ,
  3,
];

const lista1Count = {};

lista1.map(function (elemento) {
  if (lista1Count[elemento]) {
    lista1Count[elemento] += 1;
  } else {
    lista1Count[elemento] = 1;
  }
});

const listaArray = Object.entries(lista1Count).sort(function (
  valorAcomulado,
  nuevoValor
) {
  valorAcomulado - nuevoValor;
});

const lista1Array = Object.entries(lista1Count).sort(function (elementoA, elementoB) {
  return elementoA[1] - elementoB[1];
});

const moda = lista1Array[lista1Array.length - 1] ;