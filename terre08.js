let nb1 = process.argv[2];
let nb2 = process.argv[3];
let calc = 1;
function puissance(nb1, nb2){
	while (nb2 > 0){
		calc = calc * nb1;
		nb2--;
	}
	return (calc);
}
if (nb2[0] == '-')
{
console.log('negatif');
}
else
console.log(puissance(nb1, nb2))

