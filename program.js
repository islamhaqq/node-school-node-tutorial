const cliArguments = process.argv.slice(2);
const sumOfArguments = cliArguments.reduce(
	(sum, argument) => (sum += +argument),
	0,
);
console.log(sumOfArguments);
