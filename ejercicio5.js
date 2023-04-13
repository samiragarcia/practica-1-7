let kilometrosHastaTiendaMarcelina = 2.6;
let metrosTiendaMarcelinaHastaCasaTio = 691;
let kilometro = 1;
let metro = 1000;
let milimetro =1000
let metroDos = 1
let kilometrosDistRecorridaMilimetros = (kilometrosHastaTiendaMarcelina * metro / kilometro * milimetro / metroDos );
let metrosDistRecorridaMilimetros = (metrosTiendaMarcelinaHastaCasaTio * milimetro / metroDos);
let totalDisRecorridaMilimetros = (kilometrosDistRecorridaMilimetros + metrosDistRecorridaMilimetros);

console.log(" en total recorrio " + totalDisRecorridaMilimetros + " milimetros ");