 var creaBtn = document.getElementById('btn');
 creaBtn.addEventListener ("click" , function() {
   var giocatore = Math.floor(Math.random() * 6 + 1);
   var computer = Math.floor(Math.random() * 6 + 1);

   if (giocatore > computer){
     console.log("Ha vinto il giocatore!");
   } else if (computer > giocatore) {
     console.log("Ha vinto il computer!");
   } else {
     console.log("Pareggio!");
   }
 });
