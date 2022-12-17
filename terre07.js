let argv = process.argv;
let i = 0;
let res = '';
function length() {
	for (res of argv[2]){
		i++;
	}
	return (i);
}
if (argv[2] == undefined){
	console.log('Pas d\'argument');
}
else if (argv[3] != undefined){
	console.log('Trop d\'arguments')
}
else if(argv[2][0] >= 0 && argv[2][0] <= 9){
	console.log('L\'argument contient un nombre')
}
else
console.log(length());
