'use:script'
 const mail = prompt('enter your mail');
 console.log(mail);

 const operatore =["gmail", "libero", "alice", "hotmail", "outlook"];
 console.log(operatore);
 const accessoConsentito = 'accesso consentito';
 const accessoNegato = 'accesso negato';


for(let i = 0; i < operatore.length; i++){
    if(operatore[i]==mail){
        console.log(true);
        alert(accessoConsentito);   
    }
    else if(operatore != mail){
            console.log(false);
            alert(accessoNegato);
          
    }
    else{break}
}

