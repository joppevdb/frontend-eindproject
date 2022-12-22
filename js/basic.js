// variables
// buttons
const btnBeer = document.getElementById("btnBeer")
const btnBrewery = document.getElementById("btnBrewery")
const btnOwner = document.getElementById("btnOwner")
const btnBreweryIDSearch = document.getElementById('breweryIdSearch')
const btnTypeSearch = document.getElementById('typeSearch')
const btnNameSearch = document.getElementById('beerSearch')


// divs
const divBeer = document.getElementById("beer")
const divBrewery = document.getElementById("brewery")
const divOwner = document.getElementById("owner")

const divBIDSearch = document.getElementById('overBreweryID')
const divTSearch = document.getElementById('overviewType')
const divNSearch = document.getElementById('overviewBeer')

// click actions
// beer
btnBeer.addEventListener('click', function (e){
    divOwner.classList.add('invisible')
    divBrewery.classList.add('invisible')
    divBeer.classList.add('visible')
    divBeer.classList.remove('invisible')
})

btnNameSearch.addEventListener('click', function (e){
    divNSearch.classList.add('visible')
    divNSearch.classList.remove('invisible')
})

btnBreweryIDSearch.addEventListener('click', function (e){
    divBIDSearch.classList.add('visible')
    divBIDSearch.classList.remove('invisible')
})

btnTypeSearch.addEventListener('click', function (e){
    divTSearch.classList.add('visible')
    divTSearch.classList.remove('invisible')
})

// brewery
btnBrewery.addEventListener('click', function (e){
    // make invisible
    divOwner.classList.add('invisible')
    divBeer.classList.add('invisible')
    // make visible
    divBrewery.classList.add('visible')
    // remove invisible
    divBrewery.classList.remove('invisible')
})


// owner
btnOwner.addEventListener('click', function (e){
    // make invisible
    divBrewery.classList.add('invisible')
    divBeer.classList.add('invisible')
    // make visible
    divOwner.classList.add('visible')
    // remove invisible
    divOwner.classList.remove('invisible')
})



//