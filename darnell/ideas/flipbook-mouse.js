var strings = [" I organize", "I host", "I dance", "I sing", "I look", "I sit", "I talk to people"]
var stringsTwo = ["book talk", "movie", "movie about thinking","book about seeing", "movie about being alone", "field that is yellow", "walk that is nice", "walk that is wet", "conversation that pauses"]
// var stringsThree = [";)", ";0", ":p", ";(", ":*", ";>"]

let arrayLength = strings.length;
// var body = document.querySelector('body');
var option = document.querySelector('.option')
var optionTwo = document.querySelector('.optionTwo')
// var optionThree = document.querySelector('.optionThree')
console.log(optionTwo)
// console.log(optionThree)
counter = 0

document.addEventListener('mousemove', function(){
  counter++;
  var i = Math.floor(counter / 2) % strings.length
  console.log(i)

  option.innerText = strings[i]
  optionTwo.innerText = stringsTwo[i]
  // optionThree.innerText = stringsThree[i]
  
  // body.style.backgroundImage = 'url("' + images[i] + '")';
})

// I can organize
// I can host
// I can dance
// I can sing
// I can look at a mirror
// I can talk to a mirror
// I can sit
// I can sit and think
// I can sit and think and cry
// I can code
// I can read
// I can talk to people

// A book talk
// A movie
// A movie about thinking
// A book about seeing
// A movie about being alone
// A field that is yellow
// A walk that is nice
// A walk that is wet
// A conversation that pauses

