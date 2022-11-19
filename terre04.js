let argv = process.argv[2];
if (argv % 2 == 0 || argv % 2 == -0)
{
	console.log("pair");
}
else if (argv % 2 == 1 || argv % 2 == -1)
{
	console.log("impaire");
}
else
{
	console.log("Tu ne me la mettras pas a l'envers !");
}
