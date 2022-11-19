let args = process.argv[2];
let info = '';
let alpha = args.codePointAt(0);
//let newalpha = alpha.codePointAt(0);
for(alpha; alpha < 123; alpha++)
{
	info += String.fromCharCode(alpha);
}
console.log(info);


