var mailUtente = prompt ("Inserisci la tua mail");
var mailAccettate = ["ciao@libero.it", "ciao@gmail.com", "ciao@yahoo.it"];
var mailTrovata = false;

for (var i = 0; i < mailAccettate.length; i++) {

  if (mailUtente == mailAccettate[i]){
    mailTrovata = true;
  }
}

if (mailTrovata == true) {
  console.log("La tua mail è stata accettata");
} else {
  console.log("Accesso negato");
}
