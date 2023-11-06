// vanilla,vanilla,vanilla,strawberry,coffee,coffee

const userFlavors = prompt('Enter a list of comma-separated froyo flavors');

const flavorString = userFlavors.split(',');

function getFlavorCount(flavorString) {
    const flavorObject = {}
    for (let flavor of flavorString) {
       flavorObject[flavor] = (flavorObject[flavor] || 0) + 1
    }
    return flavorObject;
}

console.log(getFlavorCount(flavorString));
