//$(document).ready(function() {
//   "use strict";let datos = new Object()
let lines = [];
let count = 1;
let datos = {};


/*
$.ajax({
    async: true,
    type: "GET",
    //url: "../data/pokemon.csv",
    url: `https://pokeapi.co/api/v2/pokemon-form/${count}`,
    dataType: "text",

    success: function(data) {
        processData(data);
    }

});

function processData(allText) {

    var record_num = 12; // or however many elements there are in each row
    var allTextLines = allText.split(/\r\n|\n/);
    var entries = allTextLines[0].split(',');


    var headings = entries.splice(0, record_num);
    while (entries.length > 0) {
        var tarr = [];
        for (var j = 0; j < record_num; j++) {
            tarr.push(headings[j] + ":" + entries.shift());
        }
        lines.push(tarr);
    }
    table = allText.split("\n").map(line => line.split(",")),
        datos = Object.create(
            table
        ),


        //categories = lines[0].slice(1).map(e => e * 1),
        data = table.slice(1).map(a => ({
            "data": a[0],
            "nombre": a.slice(1).slice(1).map(e => e * 1)

        }));





    //console.log(categories);
    let nombrePokemonContainer = document.getElementById('nombrePokemon');
    nombrePokemonContainer.innerHTML = `  <h2> <big>${table[0][10]}`;
    //console.log(table[0][10])
}*/







//Calling define with module ID, dependency array, and factory function



async function getUser(numero) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${numero}/`);
    let data = await response.json()
    let nombrePokemonContainer = document.getElementById('nombrePokemon');
    nombrePokemonContainer.innerHTML = ` <h2 class="nombre"> Nombre: <span>${data.name}</span></h2>  `;

    return data;
}


function renderImage() {
    let pokemonContainer = document.getElementById('pokemon');

    pokemonContainer.innerHTML = `<img id="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg" alt="Pokemon's image">           `;






};

//https://pokeapi.co/api/v2/pokemon-form/${count}/
let prev = document.getElementById("previous");
let next = document.getElementById("next");


prev.onclick = function() {
    if (count > 1) {
        count = count - 1;
        renderImage();
        getUser(count);
    }
};

next.onclick = function() {
    if (count < 649) {
        count = count + 1;
        renderImage();
        getUser(count);

    }
};
//});
getUser(count);

renderImage();