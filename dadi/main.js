'use:script'

const numeroUser = Math.floor(Math.random()*6 + 1);
const numeroCpu = Math.floor(Math.random()*6 + 1);
let text = '';

console.log('Numero User: ' + numeroUser);
console.log('Numero CPU: ' + numeroCpu);

if(numeroUser > numeroCpu){
    text = 'Hai vinto';
}else if(numeroUser < numeroCpu){
    text = 'Hai Perso';
}else{
    text = 'Pareggio';
}


console.log(text);