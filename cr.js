let egg = document.getElementById('egg');
let hidden = document.createElement('img');
let code = 0;
hidden.src = 'cr/hidden.gif';

egg.onclick = function() {
    if (code == 0) {
        egg.innerHTML = '';
        egg.appendChild(hidden);
        hidden.style.height = '600px';
        code = 1;
    }
    else {
        code = 0;
        egg.innerHTML = 'Clash Royale';
    }
}
