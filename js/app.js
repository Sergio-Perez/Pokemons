let count = 1;

var intervalo;
var comprobar = 0;


async function getUser(numero) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${numero}/`);
    let data = await response.json()
    let nombrePokemonContainer = document.getElementById('nombrePokemon');
    nombrePokemonContainer.innerHTML = ` <h2 class="nombre"> Nombre: <span>${data.name}</span></h2> `;


}


function renderImage() {
    let pokemonContainer = document.getElementById('pokemon');

    pokemonContainer.innerHTML = `<img id="poke" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${count}.png" alt="Pokemon's image">           `;



};

function numeros(number, numero) {
    let enumeramo = document.getElementById('numero');
    enumeramo.innerHTML = `<h3 class="center">${number}  de 893 <h3> <p>Velocidad de avance: ${numero}`;



}



function mensaje() {
    numeros(count, comprobar);
    if (comprobar >= 1) {

        renderImage();
        getUser(count);

        count++;


    }

}


function arrancar() {
    let boton = document.getElementById("boton");
    boton.innerHTML = `<button class="botones" type="button" value="Pase solo"  "> <img src="https://image.flaticon.com/icons/png/512/3/3884.png"></button>`;
}



function parar() {
    let boton_parar = document.getElementById("boton-parar");

    boton_parar.innerHTML = `<button class="botones" type="button" value="Parar"  "> <img src="https://static.motor.es/fotos-diccionario/2020/07/senal-stop_1595761816.jpg"></button>`;

}


//https://pokeapi.co/api/v2/pokemon-form/${count}/
let prev = document.getElementById("previous");
let next = document.getElementById("next");

let boton_paramos = document.getElementById("boton-parar");
let boton_arrancamos = document.getElementById("boton");

boton_arrancamos.onclick = function() {
    intervalo = setInterval(mensaje, 3000);
    comprobar++;
};

boton_paramos.onclick = function() {
    for (var i = 1; i < intervalo; i++)
        window.clearInterval(i);
    clearInterval(mensaje);
    comprobar--;
};
prev.onclick = function() {
    if (count > 1) {
        count = count - 1;
        renderImage();
        getUser(count);
        numeros(count, comprobar);
    }
};

next.onclick = function() {
    if (count < 894) {
        count = count + 1;
        renderImage();
        getUser(count);
        numeros(count, comprobar);

    }
};
//});
getUser(count);
numeros(count, comprobar);
renderImage();
arrancar()
parar()