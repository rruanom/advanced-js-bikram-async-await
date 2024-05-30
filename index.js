//DESARROLLA AQUI TUS SOLUCIONES
//Ejercicio 1.- Declara una función **getRandomPokemon** que retorne un pokemon aleatorio.

const getRandomPokemon = async () => {
    let numeroRandom = Math.floor(Math.random() * 1025);
    let pokemonRandom = `https://pokeapi.co/api/v2/pokemon/${numeroRandom}`
    const endpointPokRandom = await fetch(pokemonRandom)
    if (endpointPokRandom.ok) {
        const data = await endpointPokRandom.json()
        return data
    } else {
        throw 'no hay lista de pokemon'
    }
}

//Ejercicio 2.- Declara una funcion **getImageAndName** que retorne el nombre y 
//la URL de la imagen de un pokemon => (return {img, name})
async function getImageAndName(pokemon) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    let data = await response.json();
    let name = data.name;
    let img = data.sprites.front_default;
    return { img, name }
}
/*Ejercicio 3.- Declara una funcion **printImageAndName** que retorne el string necesario
 para pintar la imagen y el nombre del pokemon en el DOM de la siguiente forma:

html
<section>
    <img src="url de imagen" alt="nombre del pokemon">
    <h1>Nombre del pokemon</h1>
</section>
*/
const printImageAndName = async () => {
    try {
        let pokemon1 = await fetch(`https://pokeapi.co/api/v2/pokemon/1`)
        if (pokemon1.ok) {
            const data = await pokemon1.json()
            return `<section>
                <img src=${data.sprites.front_default} alt=>${data.name}
                <h1>${data.name}</h1>
            </section>`;
        } else {
            throw `no hay datos del pokemon que buscas`
        }
    } catch (error) {
        console.log(error)
    }
}
/*Ejercicio 4.- Declara una función **getRandomDogImage** que retorne la url de la imagen de un perro aleatorio*/
const getRandomDogImage = async () => {
    try {
        const imagenRandom = await fetch('https://dog.ceo/api/breeds/image/random')
        if (imagenRandom.ok) {
            let respuesta = await imagenRandom.json();
            return respuesta.message
        } else throw `imagen random no encontrada`
    } catch (error) {
        console.log(error)
    }
}
getRandomDogImage()
    .then(resp => resp.mensaje)
//Ejercicio 5.- Declara una función **getRandomPokemonImage** que retorne la url de la imagen de un pokemon aleatorio.
const getRandomPokemonImage = async () => {
    const numeroRandom = Math.floor(Math.random() * 1025)
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${numeroRandom}`)
    try {
        if (response.ok) {
            const data = await response.json();
            const resultados = data.sprites.front_default
            return resultados;
        } else {
            throw `No se pudo acceder a la URL`
        }
    } catch (error) {
        console.log(error)
    }
}

getRandomPokemonImage()
    .then((resp) => resp)
    .catch((error) => {
        console.log(error)
    });

/*Ejercicio 7.- Declara una función **getRandomCharacter** que retorne un personaje aleatorio.*/
const getRandomCharacter = async () => {
    const numeroRandom = Math.floor(Math.random() * 826)
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/${numeroRandom}`)
        if (response.ok) {
            const data = await response.json()
            return data
        }
    } catch (error) {
        console.log(error)
    }
}
getRandomCharacter()
    .then(resp => resp)
/*Ejercicio 8.- Declara una función **getRandomCharacterInfo** que retorne de un personaje su imagen, nombre, episodios 
en los que aparece y el nombre del primer episodio en el que aparece + fecha de estreno, 
tendrás que hacer otro fetch para llegar a los ultimos datos. Formato de 
retorno => (return {img, name, episodes, firstEpisode, dateEpisode})*/
const getRandomCharacterInfo = async () => {
    try {
        let objetoCharacter;
        const response = await fetch(`https://rickandmortyapi.com/api/character/10`)
        if (response.ok) {
            const data = await response.json()
            objetoCharacter = { name: data.name, episode: data.episode, img: data.image, firstEpisode: data.episode[0]}
        }
        const response1 = await fetch(`${objetoCharacter.firstEpisode}`)
        if(response1.ok){
            const data1 = await response1.json()
            objetoCharacter ={...objetoCharacter, dateEpisode: data1.air_date}
            let img= objetoCharacter.img
            let name= objetoCharacter.name
            let episodes= objetoCharacter.episode
            let firstEpisode= objetoCharacter.firstEpisode 
            let dateEpisode = objetoCharacter.dateEpisode
            return {img, name, episodes, firstEpisode, dateEpisode}
         }
    } catch (error) {
        console.log(error)
    }
}
getRandomCharacterInfo(20)
    .then(resp=>console.log(resp))