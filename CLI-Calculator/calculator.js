#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
const sleep = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 3500);
    });
};
async function animation() {
    let rainbowTitle = chalkAnimation.rainbow(`\n********************************************* \n     Developed by Sulaiman Hussain \n********************************************* `);
    await sleep();
    rainbowTitle.stop();
}
async function cal() {
    let message = chalkAnimation.karaoke(` \n\n~~~Let's Start Your Calculations!!!~~~`);
    await sleep();
    message.stop();
    console.log(chalk.blueBright(`         _____________________
        |  _________________  |
        | |SULAIMAN HUSSAIN | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|\n\n`));
}
async function askQuestion() {
    const answers = await inquirer
        .prompt([
        {
            type: "list",
            name: "operator",
            message: chalk.redBright("Which operation you want to perform ?"),
            choices: [" + Addition", " - Subtraction", " * Multiplication", " / Division"],
        },
        {
            type: "number",
            name: "num1",
            message: chalk.greenBright("Enter the first number ? ")
        },
        {
            type: "number",
            name: "num2",
            message: chalk.greenBright("Enter the second number ?")
        }
    ]);
    if (answers.operator === " + Addition") {
        console.log(chalk.yellowBright(` \nYour result is ${answers.num1} + ${answers.num2} =  ${answers.num1 + answers.num2}\n`));
    }
    else if (answers.operator === " - Subtraction") {
        console.log(chalk.yellowBright(`\n Your result is ${answers.num1} - ${answers.num2} =  ${answers.num1 - answers.num2}\n`));
    }
    else if (answers.operator === " * Multiplication") {
        console.log(chalk.yellowBright(`\n Your result is ${answers.num1} * ${answers.num2} =  ${answers.num1 * answers.num2}\n`));
    }
    else if (answers.operator === " / Division") {
        console.log(chalk.yellowBright(`\n Your result is ${answers.num1} / ${answers.num2} =  ${answers.num1 / answers.num2}\n`));
    }
}
async function startAgain() {
    do {
        await askQuestion();
        var again = await inquirer
            .prompt([
            {
                type: "input",
                name: "restart",
                message: chalk.blueBright("Do you want to continue ? Press ( y / n )")
            }
        ]);
    } while (again.restart === "y" || again.restart === "Y" || again.restart === "yes" || again.restart === "YES");
}
await animation();
await cal();
await startAgain();
