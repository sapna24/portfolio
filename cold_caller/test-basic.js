var names = [
  'Faith',
  'Jacqueline',
  'Chloe',
  'Nalini',
  'Rebekah',
  'Shreya',
  'Grace',
  'Kylie',
  'Abigail',
  'Maria',
  'Melinda',
  'Savannah',
  'Lea',
  'Lina',
  'Rebecca',
  'Christine',
  'Aleef',
  'Angela',
  'Josephine',
  'Bella'
];

var doneSoFar = {};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomName() {
  if (Object.keys(doneSoFar).length === 20) {
    doneSoFar = {};
  }

  var index = getRandomInt(1, 20) - 1;
  while( doneSoFar[index] ) {
    index = getRandomInt(1, 20);
  }
  console.log(index);
  console.log(names[index])
  doneSoFar[index] = true;

  document.getElementById('nameContainer').innerText = names[index];
}
