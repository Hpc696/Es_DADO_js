window.console.log("Inizia il lancio del dado");
let numfacce= prompt("Inserisci il numero di facce del dado")
let risultato=0;
for(i=0; i<numfacce; i++){
    risultato = Math.round(Math.random()*i);
    i++;
}
document.write("E uscito il cazzo di numero" + "\n" + risultato);