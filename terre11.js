let arg = process.argv[2];
let argnull = 'Veuillez entrer un argument';

if (arg == undefined)
	console.log(argnull);
/*
function twelve (time)
{
	var hours = parseInt(time.substr(0, 2));
	var minutes = time.substr(3, 2);
 	var ampm = hours >= 12 ? 'PM' : 'AM';
	if (hours >= 24)
	{
		return ("heure invalide");
	}
	if (hours === 24)
	{
		hours = 12;
	}
	hours = hours % 12;
 	hours = hours ? hours : 12;
 	return hours + ':' + minutes + ' ' + ampm;
}*/
function convertTo12Hour(time)
{
	let hours = parseInt(time.substr(0, 2));
	let minutes = parseInt(time.substr(3, 2));
	let ampm;
  	if (hours >= 24 || minutes >= 60)
	{
   		 return "Invalid time";
	}
	if (hours === 24 && minutes === 0)
	{
		hours = 12;
	}
	else if (hours === 0)
	{
		hours = 12;
	}
	else if (hours > 12)
	{
		hours = hours - 12;
	}
	if (hours >= 12)
	{
		ampm = 'PM';
	}
	else
	{
		ampm = 'AM';
	}
	//ampm = hours >= 12 ? 'PM':'AM';
	return hours + ':' + minutes + ' ' + ampm;
}

console.log(convertTo12Hour(arg));
