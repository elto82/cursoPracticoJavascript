function calculoMediaAritmetica(lista) {
    //let sumaLista = 0;  
    // for (let i = 0; i < lista.length; i++){
    //     sumaLista = sumaLista + lista[i];
    // }
  
    const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    });
  
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

const lista1 = [100, 200, 400, 40000000000];

const mitadLista1 = parseInt (lista1.length / 2) ;

function esPar(numerito) {
  if (numerito % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
let mediana;
if (esPar (lista.length)) {
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];
    function calculoMediaAritmetica(lista) {
  //let sumaLista = 0;

  // for (let i = 0; i < lista.length; i++){
  //     sumaLista = sumaLista + lista[i];
  // }

  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;
  return promedioLista;

  const promedio1y2 = calculoMediaAritmetica([
      elemento1,
      elemento2
  ]);
  mediana = promedio1y2;
}
}else{
    mediana = lista1[mitadLista1];
}
