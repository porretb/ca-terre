let arg1 = parseInt(process.argv[2]);
let arg2 = parseInt(process.argv[3]);
let arg3 = parseInt(process.argv[4]);
let arr = [arg1, arg2, arg3];

function  erreur()
{
	 console.log('erreur');
}
function findSuisse (a,b)
{
	if (a > b)
		return 1;
	if (a < b)
		return -1;
	if (a = b)
		return 0;
}

arr.sort(findSuisse);
if (isNaN(arr))
{
	return erreur();
}

if (arr[0] === arr[1])
{
	return erreur();
}
else if (arr[1] === arr[2])
{
	return erreur();
}
else
console.log(arr[1]);
