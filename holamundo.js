const paises = ["Perú", "Colombia", "Chile"];
const ciudades = ["Bogota", "Lima", "Santiago", "Montevideo"];
const preciociudad = [500, 400, 380, 200];
const presupuesto = 199;

let i=0;

while(preciociudad[i] > presupuesto && i < ciudades.length ){
    i++;
}
if(i == ciudades.length){
    console.log("No tenemos pasajes disponibles");
}
else{
    console.log("Puedes comprar un pasaje para: " + ciudades[i]);
}


