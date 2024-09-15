function analyserPhrase(phrase) {
  let longueur = 0;
  let nombreMots = 0;
  let nombreVoyelles = 0;
  const voyelles = "aeiouAEIOU";
  let motEnCours = false;

  for (let char of phrase) {
    if (char === ".") {
      break;
    }
    longueur++;
    if (voyelles.includes(char)) {
      nombreVoyelles++;
    }
    if (char === " ") {
      if (motEnCours) {
        nombreMots++;
        motEnCours = false;
      }
    } else {
      motEnCours = true;
    }
  }

  if (motEnCours) {
    nombreMots++;
  }

  return {
    longueur: longueur,
    nombreMots: nombreMots,
    nombreVoyelles: nombreVoyelles,
  };
}

// Exemple d'utilisation
const phrase =
  "j'aimerais savoir : quoi(what) ,qui(who), quand(when), comment(how), ou(where) et pouquoi(why)(QQQCOP ou 5W-H).";
const resultats = analyserPhrase(phrase);
console.log(`Longueur de la phrase: ${resultats.longueur}`);
console.log(`Nombre de mots: ${resultats.nombreMots}`);
console.log(`Nombre de voyelles: ${resultats.nombreVoyelles}`);
