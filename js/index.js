

const pesos = [40, 39, 33, 29, 48, 38, 35, 55, 63];

let menos40 = 0;
let entre40_50 = 0;
let mas50_menos60 = 0;
let mas_igual60 = 0;

for (let i = 0; i < pesos.length; i++) {
    if (pesos[i] < 40) {
        menos40++;        
    }else if (pesos[i] >= 40 && pesos[i] <= 50) {
        entre40_50++;        
    }else if (pesos[i] > 50 && pesos[i] <= 60) {
        mas50_menos60++;
    }else if (pesos[i] >= 60) {
        mas_igual60++;
    }
}

document.write("<h1>", "Estadística de pesos en los alumnos.", "</h1>");
document.write("<p>", "Los pesos de los alumnos son:", "</p>");
document.write(pesos);

document.write("<p>", "La estadística de pesos de los alumnos es:", "</p>");

document.write("<li>", "Alumnos con pesos menores a 40 kg: ", menos40, "</li>");
document.write("<li>", "Alumnos entre 40 y 50 kg: ", entre40_50, "</li>");
document.write("<li>", "Alumnos de mas de 50 y menos de 60 kg: ", mas50_menos60, "</li>");
document.write("<li>", "Alumnos de mas o igual a 60 kg: ", mas_igual60, "</li>");
