// variables
// buttons
// main
const btnBeer = document.getElementById("btnBeer")
const btnBrewery = document.getElementById("btnBrewery")
const btnOwner = document.getElementById("btnOwner")

// search beer
const btnBreweryIDSearch = document.getElementById('breweryIdSearch')
const btnTypeSearch = document.getElementById('typeSearch')
const btnNameSearch = document.getElementById('beerSearch')

// form beer
const btnFormBeer = document.getElementById('postBeer')

// search brewery
const btnBreweryName = document.getElementById('brewerySearch')

// form brewery
const btnFormBrewery = document.getElementById('postBrewery')

// form owner
const btnFormOwner = document.getElementById('postOwner')

// form token
const btnFormToken = document.getElementById('postToken')

// divs
// main
const divBeer = document.getElementById("beer")
const divBrewery = document.getElementById("brewery")
const divOwner = document.getElementById("owner")

// search beer
const divBeerBreweryIDSearch = document.getElementById('overBreweryID')
const divBeerTypeSearch = document.getElementById('overviewType')
const divBeerNameSearch = document.getElementById('overviewBeer')

// search brewery
const divBreweryName = document.getElementById('overviewBrewery')

// click actions
// beer
// main
btnBeer.addEventListener('click', function (e) {
    divOwner.classList.add('invisible')
    divBrewery.classList.add('invisible')
    divBeer.classList.add('visible')
    divBeer.classList.remove('invisible')
})

// search beer by name
btnNameSearch.addEventListener('click', function (e) {
    divBeerNameSearch.classList.add('visible')
    divBeerNameSearch.classList.remove('invisible')
})

// search beer by brewery id
btnBreweryIDSearch.addEventListener('click', function (e) {
    divBeerBreweryIDSearch.classList.add('visible')
    divBeerBreweryIDSearch.classList.remove('invisible')
})

// search beer by type
btnTypeSearch.addEventListener('click', function (e) {
    divBeerTypeSearch.classList.add('visible')
    divBeerTypeSearch.classList.remove('invisible')
})

// form beer
btnFormBeer.addEventListener('click', function (e){
    document.getElementById('formBeer').reset();
})

// brewery
// main
btnBrewery.addEventListener('click', function (e) {
    divOwner.classList.add('invisible')
    divBeer.classList.add('invisible')
    divBrewery.classList.add('visible')
    divBrewery.classList.remove('invisible')
})

// search brewery by name
btnBreweryName.addEventListener('click', function (e){
    divBreweryName.classList.add('visible')
    divBreweryName.classList.remove('invisible')
})

// form brewery
btnFormBrewery.addEventListener('click', function (e){
    document.getElementById('formBrewery').reset();
})

// owner
// main
btnOwner.addEventListener('click', function (e) {
    divBrewery.classList.add('invisible')
    divBeer.classList.add('invisible')
    divOwner.classList.add('visible')
    divOwner.classList.remove('invisible')
})

// form owner
btnFormOwner.addEventListener('click', function (e){
    document.getElementById('formOwner').reset();
})

// form token
btnFormToken.addEventListener('click', function (e){
    document.getElementById('formToken').reset();
})