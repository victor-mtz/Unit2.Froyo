// vanilla,vanilla,vanilla,strawberry,coffee,coffee

const userFlavors = prompt('Enter a list of comma-separated froyo flavors');

const flavorString = userFlavors.split(',');

function createObject() {
  let obj = {};
  flavorString.forEach((flavor) => {
    obj[flavor] = 0;
  });
  return obj;
}

function updateObject() {
  let obj = createObject();
  let keys = Object.keys(obj);
  keys.forEach((key) => {
    flavorString.forEach((flavor) => {
      if (flavor === key) {
        obj[flavor] += 1;
      }
    });
  });
  return obj;
}

console.log(updateObject());
