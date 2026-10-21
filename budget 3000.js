const nom = 'Awa'; // Type : string
const budget = 30000; // Type : number ; unité : FCFA
const transportTexte = '12500'; // Type : string ; unité : FCFA
const alimentationTexte = '18300'; // Type : string ; unité : FCFA
const loisirsTexte = '7500'; // Type : string ; unité : FCFA

// TODO : convertissez les trois dépenses en nombres.
const transport = Number(transportTexte);
const alimentation = Number(alimentationTexte);
const loisirs = Number(loisirsTexte);

// TODO : calculez le total, le budget restant et budgetRespected.
const totalDepenses = transport + alimentation + loisirs;
const budgetRestant = budget - totalDepenses;
const budgetRespected = budgetRestant >= 0;

// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses pour ${nom} :
- Budget initial : ${budget} FCFA
- Dépenses :
-Transport : ${transport} FCFA
-Alimentation : ${alimentation} FCFA
-Loisirs : ${loisirs} FCFA
-Total des dépenses : ${totalDepenses} FCFA
-Budget restant : ${budgetRestant} FCFA
-Budget respecté : ${budgetRespected}`)
// TODO : calculez le total, le budget restant et budgetRespected.
// TODO : affichez le rapport uniquement avec des littéraux de gabarit.
console.log(`Rapport de dépenses à compléter pour ${nom},`);