//Event Bubbling
var p = document.querySelector('.parent');

p.addEventListener('click', function(){
	console.log('parent clicked')
});

var c = document.querySelector('#child');

c.addEventListener('click', function(){
	console.log('child clicked')
});

//Event Capturing
var p2 = document.querySelector('.parent2');

p2.addEventListener('click', function(){
	console.log('parent2 clicked')
},true);

var c2 = document.querySelector('#child2');

c2.addEventListener('click', function(){
	console.log('child2 clicked')
},true);