const onehandMap = [
	["`", "Backspace"],

	["1", "="],   //["!", "+"],
  ["2", "-"],   //["@", "_"],
  ["3", "0"],   //["#", ")"],
  ["4", "9"],   //["$", "("],
  ["5", "8"],   //["%", "*"],
  ["6", "7"],   //["^", "&"],

	["Tab", "\\"],
  ["q",   "]"],
	["w",   "["],
	["e",   "p"],
	["r",   "o"],
	["t",   "i"],
	["y",   "u"],

	["CapsLock", "Enter"],
	["a",        "'"],
	["s",        ";"],
	["d",        "l"],
	["f",        "k"],
	["g",        "j"],
	["h",        "h"],

	["z", "/"],
	["x", "."],
	["c", ","],
	["v", "m"],
	["b", "n"],
];

const buffer = [];
const write = (line) => buffer.push(line);
const flush = () => require("fs").writeFileSync(`${ __dirname }/onehand.ahk`, buffer.join("\n"));

for (const [key, value] of onehandMap) {
	write(`Space & ${ key }::`);
	write(`  Send {${ value }}`);
	write(`  Return`);
	write(``);
}

flush();
