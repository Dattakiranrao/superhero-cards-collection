const superheroDiv = document.getElementById('superheroDiv')
const heroImageDiv = document.getElementById('heroImage')
const newsuperHero = document.getElementById("newsuperHero")
const getsearch = () => heroName = (document.getElementById("search")).value
const searchHero = document.getElementById("search-button");

const TOKEN = 'Your Access Token'
const BASE_URL = `https://superheroapi.com/api.php/${TOKEN}`


const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
}

const handelHtml = (char) => {
    const name = `<h2 class="text-3xl uppercase pb-6">${char.name}</h2>`;
    const img = `<img class="rounded-xl" src="${char.image.url}" height=300 width=300>`;
    const stats = Object.keys(char.powerstats).map(stat => {
        return `<p class="pt-4" >${statToEmoji[stat]} ${stat.toUpperCase()}: ${char.powerstats[stat]}</p>`
    }).join(' ')
    heroImageDiv.innerHTML = `${name}${img}${stats}`;
}

const getrandom = () => Math.floor(((Math.random()) * 730) + 1);
console.log(getrandom());

const getSuperhero = (id) => {
    fetch(`${BASE_URL}/${id}`)
        .then(response => response.json())
        .then(json => {
            handelHtml(json);
        });
}

newsuperHero.onclick = () => getSuperhero(getrandom())

const getSearchsuperhero = (name) => {
    fetch(`${BASE_URL}/search/${name}`)
        .then(response => response.json())
        .then(json => handelHtml(json.results[0]))
}

searchHero.onclick = () => getSearchsuperhero(getsearch())