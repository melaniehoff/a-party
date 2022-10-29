// get dom elements for capacities and inspirations
var capacities = document.querySelectorAll('.capacities ul li');
var inspirations = document.querySelectorAll('.inspirations ul li');

// randomly display one capacity and one inspiration
var capacityIndex = Math.floor(Math.random() * capacities.length);
var inspirationIndex = Math.floor(Math.random() * inspirations.length);

capacities[capacityIndex].style.display = 'block';
inspirations[inspirationIndex].style.display = 'block';