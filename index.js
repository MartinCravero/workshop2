window.onload = () => {

let boton = document.getElementById('boton')
let buscador = document.getElementById('buscador')
let infoAnime2 = document.getElementById('cuerpo')


async function getAnime (anime){
    let results = await fetch(`https://api.jikan.moe/v3/search/anime?q=${anime}`)
        results = await reults.json()
        return results
    }


    function renderView (infoAnime) {
        for (let i = 0; i < infoAnime.results.length; i++) {
            infoAnime2.innerHTML = `<h1>${infoAnime.results[i].title}</h1> <img src="${infoAnime.results[i].image_url}" alt="poster">`
            let listaAnime = []
            infoAnime2.appendChild = (newItem)
        }
    }
    
    function buscarAnime() {
        let anime = buscador.value
        boton.addEventListener ('click',()=>{
            getAnime(anime)
                .then ((response) => renderView(response))
                .catch ((error) => console.error(error))
            buscador.value = ''    
        })
    }
    buscarAnime()
}