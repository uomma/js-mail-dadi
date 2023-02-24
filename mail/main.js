'use:script'
 const mail = prompt('enter your mail');
 console.log(mail);

/*const test = true;
 console.log(test); */

 const operatore =["gmail", "libero", "alice", "hotmail", "outlook"];
 console.log(operatore);
 const accessoConsentito = 'accesso consentito';
 const accessoNegato = 'accesso negato';


//for(let i = 0; i < operatore.length; i++)
//{
    /* cosi mi stampa tutto ciò che è dentro array:operatore */
    //console.log(operatore[i])    

//}//

for(let i = 0; i < operatore.length; i++){
    if(operatore[i]===mail){
        console.log(true);
        alert(accessoConsentito);
    }
    else if(operatore !== mail){
            console.log(false);
            alert(accessoNegato);
          
    }
    else{break}
}

