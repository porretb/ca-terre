let arg = process.argv.slice(2);

function trieOrNot(arr)
{
	let temp = 0;
	if (arr.length !== 0)
	{
		for (i = 0; i < arr.length; i++)
		{
			arr[i] = parseInt(arr[i]);
			//console.log(arr[i]);
			//console.log(temp);
			if (arr[i] > temp && i === arr.length-1)
			{
				return console.log('trié')
			}
			if (arr[i] < temp)
			{
				return console.log('pas trié')
			}
			else if (isNaN(arr[i]))
				return console.log('erreur');
			temp = arr[i];
		}
	/*	console.log(arr);
		if (arr[i] > arr[i+1])
			return console.log('pas trié');
		else
			return console.log('trié');
	*/}
	else
		return console.log('tableau vide');
}
trieOrNot(arg);
