let x = process.argv[2]; // nombre de base
let res = 0; // resultat

function racine(ag1){
	while (ag1 != res * res)
	{
		res++;
		if (res > (ag1 / 2 + 1))
		{
			return (0);
		}
	}
return (res);
}


// structure de controle

if (x < 0)
{
	console.log('nombre negatif');
}
else if (isNaN(x))
{
	console.log('veuillez entrer un nombre');
}
else
{
racine(x);
	if (res > (x / 2 +1))
	{
		console.log('pas de racine');
	}
	else
	console.log('Resultat :', res);
}
