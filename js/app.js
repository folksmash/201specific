'use strict';

let user = prompt('Yo whats your name?')
    alert('Your name is: ' + user)
let answer1 = confirm('Did you eat your wheaties today?')
if (answer1 === true) {
    alert('Obviously, you\'re a champion')
} else { 
    alert('Gotta step it up partner')
}
let answer2 = confirm('Do you enjoy puns?')
if (answer2 === true) {
    alert('PUN OF US PUN OF US')
} else { 
    alert('Aww pun on and join us')
}
let answer3 = confirm('Are you over 6\' tall?')
if (answer3 === true) {
    alert('How is the weather up there?')
} else { 
    alert('Welcome to the club')
}
let answer4 = confirm('Do you club baby seals?')
if (answer4 === false) {
    alert('Oh, thank god you don\'t')
} else { 
    alert('You must be low on money AND gold')
}
let answer5 = confirm('Are you going to excerise tonight?')
if (answer5 === true) {
    alert('TIME TO GET PUMPED UP')
} else { 
    alert('*sad Arnold noises*')
}
    alert('Thanks for playing along ' + user)