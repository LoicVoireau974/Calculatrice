// Demander à l'utilisateur un premier nombre 
let n1 = Number(prompt("Veuillez saisir un premier nombre : "));
// Demander à l'utilisateur un deuxième nombre
let n2 = Number(prompt("Veuillez saisir un deuxième nombre : "));
// Déclarer puis initialisez le résultat à 0
let res = 0;
// Demandez à l'utilisateur quelle opérateur choisir pour faire le calcul
let operatorChoice = prompt('Veuillez choisir entre +, -, x, / : ');

switch(operatorChoice) {
    // Si l'utilisateur choisit + alors additionner
    case "+":
        res = n1 + n2;
        break;
    // Si l'utilisateur choisit - alors supprimer
    case "-":
        res = n1 - n2;
        break;
    // Si l'utilisateur choisit x alors multiplier
    case "x":
        res = n1 * n2;
        break;
    // Si l'utilisateur choisit / alors diviser
    case "/":
        res = n1 / n2;
        break;
    default:
    // Si l'utilisateur choisit un opérateur invalide
        console.log('Opérateur inconnu');
}

console.log(res);
