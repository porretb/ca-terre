/*Declaration variable argument*/
let nbr = process.argv[2];

/* Fonction nombre premier*/
function prime (nbr)
{
	if (nbr < 2 || isNaN(nbr) || nbr.includes('.'))
		return console.log(nbr + ' ' + "n'est pas premier");
	for (var i = 2; i < nbr; i++ )
		if (nbr%i === 0)
			return console.log(nbr + ' ' + "n'est pas premier");
	return console.log(nbr + ' ' + "est premier");
}
prime(nbr);
