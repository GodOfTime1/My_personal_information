// Colt

let colt_attack = document.getElementById('colt_attack');
let colt_gif = document.createElement('img');
let colt_ultimate = document.getElementById('colt_ultimate');
let colt_ultimate_gif = document.createElement('img');
let body = document.querySelector('body');

console.log(colt_attack.innerText)

colt_attack.onmouseover = function() {
    colt_gif.src = 'brawl/colt_attack.gif';
    colt_attack.appendChild(colt_gif);
}

colt_attack.onmouseout = function() {
    colt_attack.innerHTML = '6 bullets.'
}

colt_ultimate.onmouseover = function() {
    colt_ultimate_gif.src = 'brawl/colt_ult.gif';
    colt_ultimate.appendChild(colt_ultimate_gif);
}

colt_ultimate.onmouseout = function() {
    colt_ultimate.innerHTML = 'wall-breaking bullets and higher damage.'
}
// Bo
let bo_attack = document.getElementById('bo_attack');
let bo_gif = document.createElement('img');
let bo_ultimate = document.getElementById('bo_ultimate');
let bo_ultimate_gif = document.createElement('img');

bo_attack.onmouseover = function() {
    bo_gif.src = 'brawl/bo_attack.gif';
    bo_attack.appendChild(bo_gif);
}

bo_attack.onmouseout = function() {
    bo_attack.innerHTML = '3 arrows.'
}

bo_ultimate.onmouseover = function() {
    bo_ultimate_gif.src = 'brawl/bo_ult.gif';
    bo_ultimate.appendChild(bo_ultimate_gif);
}

bo_ultimate.onmouseout = function() {
    bo_ultimate.innerHTML = '3 mines into the ground'
}

// Barley
let barley_attack = document.getElementById('barley_attack');
let barley_gif = document.createElement('img');
let barley_ultimate = document.getElementById('barley_ultimate');
let barley_ultimate_gif = document.createElement('img');

barley_attack.onmouseover = function() {
    barley_gif.src = 'brawl/barley_attack.gif';
    barley_attack.appendChild(barley_gif);
}

barley_attack.onmouseout = function() {
    barley_attack.innerHTML = 'puddle of poison.'
}

barley_ultimate.onmouseover = function() {
    barley_ultimate_gif.src = 'brawl/barley_ult.gif';
    barley_ultimate.appendChild(barley_ultimate_gif);
}

barley_ultimate.onmouseout = function() {
    barley_ultimate.innerHTML = '5 bottles of poison'
}

// Shelly
let shelly_attack = document.getElementById('shelly_attack');
let shelly_gif = document.createElement('img');
let shelly_ultimate = document.getElementById('shelly_ultimate');
let shelly_ultimate_gif = document.createElement('img');

shelly_attack.onmouseover = function() {
    shelly_gif.src = 'brawl/shelly_attack.gif';
    shelly_attack.appendChild(shelly_gif);
}

shelly_attack.onmouseout = function() {
    shelly_attack.innerHTML = 'shotgun'
}

shelly_ultimate.onmouseover = function() {
    shelly_ultimate_gif.src = 'brawl/shelly_ult.gif';
    shelly_ultimate_gif.style.width = '400px';
    shelly_ultimate.appendChild(shelly_ultimate_gif);
}

shelly_ultimate.onmouseout = function() {
    shelly_ultimate.innerHTML = 'knockback and can destroy walls '
}

// Rico
let rico_attack = document.getElementById('rico_attack');
let rico_gif = document.createElement('img');
let rico_ultimate = document.getElementById('rico_ultimate');
let rico_ultimate_gif = document.createElement('img');

rico_attack.onmouseover = function() {
    rico_gif.src = 'brawl/rico_attack.gif';
    rico_attack.appendChild(rico_gif);
}

rico_attack.onmouseout = function() {
    rico_attack.innerHTML = 'his bullets bounces off walls,'
}

rico_ultimate.onmouseover = function() {
    rico_ultimate_gif.src = 'brawl/rico_ult.webp';
    rico_ultimate_gif.style.width = '400px';
    rico_ultimate.appendChild(rico_ultimate_gif);
}

rico_ultimate.onmouseout = function() {
    carl_ultimate.innerHTML = 'more bouncy bullets.'
}

// Carl
let carl_attack = document.getElementById('carl_attack');
let carl_gif = document.createElement('img');
let carl_ultimate = document.getElementById('carl_ultimate');
let carl_ultimate_gif = document.createElement('img');

carl_attack.onmouseover = function() {
    carl_gif.src = 'brawl/carl_attack.gif';
    carl_attack.appendChild(carl_gif);
}

carl_attack.onmouseout = function() {
    carl_attack.innerHTML = 'pickaxe like '
}

carl_ultimate.onmouseover = function() {
    carl_ultimate_gif.src = 'brawl/carl_ult.gif';
    carl_ultimate_gif.style.width = '400px';
    carl_ultimate.appendChild(carl_ultimate_gif);
}

carl_ultimate.onmouseout = function() {
    carl_ultimate.innerHTML = 'more bouncy bullets.'
}