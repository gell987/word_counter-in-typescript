import chalk from "chalk";
import * as readline from "readline";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
let check = false;
const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));
async function greet() {
    console.clear();
    const rainboxTitle = chalkAnimation.rainbow("Hassam's word_counter PIAIC(PIAIC202061)\n");
    await sleep();
    rainboxTitle.stop();
}
async function main() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    function countWords(input) {
        return input.split(" ").length;
    }
    let input = await inquirer.prompt({
        name: "input",
        type: "input",
        message: chalk.redBright("Enter some text:  ")
    });
    const wordCount = countWords(input.input);
    console.log(chalk.redBright(`There are ${wordCount} words in your input.`));
}
async function main2() {
    let q_or_not = await inquirer.prompt({
        name: "q_or_not",
        type: "input",
        message: chalk.redBright(`
    Enter q(to quit)
    Enter counter(to use the word counter)
    Enter your choice:  `)
    });
    if (q_or_not.q_or_not == "q") {
        check = true;
    }
    else if (q_or_not.q_or_not == "counter") {
        await main();
    }
}
await greet();
while (check == false) {
    await main2();
}
