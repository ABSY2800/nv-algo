function estAnneeBissextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

// Exemple d'utilisation
let anneeTest = 2024;
if (estAnneeBissextile(anneeTest)) {
    console.log(`${anneeTest} est une année bissextile.`);
} else {
    console.log(`${anneeTest} n'est pas une année bissextile.`);
}
function calculerPrixBillet(age) {
    let prix;

    switch (true) {
        case (age <= 12):
            prix = 10;
            break;
        case (age >= 13 && age <= 17):
            prix = 15;
            break;
        case (age >= 18):
            prix = 20;
            break;
        default:
            prix = 0; // Cas par défaut si l'âge n'est pas valide
            break;
    }

    return prix;
}

// Exemple d'utilisation
let ageUtilisateur = 15;
let prixBillet = calculerPrixBillet(ageUtilisateur);
if (prixBillet > 0) {
    console.log(`Le prix du billet pour un utilisateur de ${ageUtilisateur} ans est de ${prixBillet} $.`);
} else {
    console.log(`L'âge saisi n'est pas valide.`);
}
