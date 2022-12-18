let x = process.argv[2]; // nombre de base
let y = process.argv[3]; // puissance
let res = 1; // resultat
function puissance(ag1, ag2){
	while (y > 0){
		res = res * x;
		y--;
	}
	return (res);
}
if (isNaN(x) && x != undefined || isNaN(y)){
	console.log('pas de charactère merci');
}
else if (x[0] == '-' || y[0] == '-'){
	console.log('pas de nombre negatif sorry');
}
else if (process.argv[4] != undefined){
	console.log('Il y a trop d\'arguements');
}
else if (y == undefined || x == undefined){
	console.log('il manque un arguement');
}
else
{
puissance(x,y);
console.log(res);
}
