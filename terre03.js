let args = process.argv;
let info = '';
for(let alpha = args.slice(2);alpha < 123; alpha++)
{
	info += String.fromCharCode(alpha);
}
console.log(info);


