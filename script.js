console.log("Dom")

const url = " https://pokeapi.co/api/v2/pokemon/"

//selectors

const card = document.getElementById("card")
const btn = document.getElementById("btn")


const getPokemon = () => {
    let id = Math.floor(Math.random() * 151);
    fetch(url+id)
    .then(res => res.json())
    .then(data => {
        //console.log(Object.keys(data))
        //console.log(data)
        card.innerHTML = `
        <p class="hp">
                <span>HP</span>${data.stats[0].base_stat}
            </p>
            <img src="${data.sprites.other.dream_world.front_default}" alt="">
            <h2 class="poke-name">${data.name}</h2>
            <div class="types">
                <span>${data.types[0].type.name}</span>
            </div>
            <div class="stats">
                <div>
                    <h3>${data.stats[1].base_stat}</h3>
                    <p>Attack</p>
                </div>
                <div>
                    <h3>${data.stats[2].base_stat}</h3>
                    <p>Defense</p>
                </div>
                <div>
                    <h3>${data.stats[5].base_stat}</h3>
                    <p>Speed</p>
                </div>
            </div>
        `
    })
    .catch(err => {
        console.log(err.message)
    })
}



window.addEventListener("load", getPokemon)
btn.addEventListener("click", getPokemon);