let arg = process.argv[2];

function convertTo24Hour(time)
{
	let hours = parseInt(time.substr(0,2));
	let minutes = parseInt(time.substr(3,2));
	let ampm = time.substr(5,2);
	if (hours === 12 && ampm === 'PM')
	{
		if (minutes > 0)
		{
			return ('Heure non valide');
		}
		hours = 24;
	}
	else if (hours === 0 && ampm === 'PM')
	{
		hours = 00;
	}
	else if (ampm === 'PM' || ampm === 'pm')
	{
		hours = hours + 12;
	}
	if (hours < 10)
	{
		hours = '0' + hours;
	}
	if (minutes < 10)
	{
		minutes = '0' + minutes;
	}
	return (hours + ':' + minutes);
}

console.log(convertTo24Hour(arg));
