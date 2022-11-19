let nb1 = process.argv[2];
let nb2 = process.argv[3];
let division = nb1 / nb2;
let reste = nb1 % nb2;
if (division == 'Infinity')
{
	console.log('erreur.');
}
else if (isNaN(division))
{
	console.log('erreur. ce n\'est pas un nombre')
}
else if (reste == nb1)
{
	console.log('erreur.');
}
else
{
console.log("Resultat : %d", Math.floor(division));
console.log("Reste: %d",reste);
}
