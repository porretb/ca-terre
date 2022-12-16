let argv = process.argv[2];
//console.log(argv);
let reverse = "";

for (let i = argv.length - 1; i >= 0 ; i--){
reverse += (argv[i]);
}
console.log(reverse);
