let joie = 'semaine'
let joies = 'semaines'
let arg = process.argv[2]
function affiche(texte)
{
	console.log(texte);
}

for (i = 0; i < arg ; i++)
{
	if (i === 0 || i === 1)
		affiche(i + ' ' + joie);
	else
	affiche(i + ' ' + joies);

}
console.log('et enfin c\'est fini')
