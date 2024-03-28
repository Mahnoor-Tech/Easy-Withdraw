#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import boxen from "boxen";

// variable declaration
const pinCode: number = 11223;
let currentBalance: number = 30000;

// header
console.log(
  chalk.hex("#f7f700")(
    boxen(`* Mahnoor's International Bank *`, {
      title: "welcoming",
      titleAlignment: "left",
      padding: 1,
      margin: 1,
    })
  )
);

// print current balance
console.log(
  chalk.hex("#bababa")(`Your current balance is: $${currentBalance}\n`)
);

// Destructuring to get a PIN number
let { pinNumber } = await inquirer.prompt([
  {
    name: "pinNumber",
    message: chalk.hex("#000000").bgYellow(` Please enter your PIN number:  `),
    type: "number",
  },
]);

// break line
console.log(`\n`);

// checking conditions
if (pinNumber === pinCode) {
  let opt = await inquirer.prompt([
    {
      name: "operations",
      message: chalk.hex("#000000").bgYellow(` What do you want to do?  `),
      type: "list",
      choices: ["cash_withdrawal", "fast_withdrawal", "check_balance"],
    },
  ]);

  //break line
  console.log(`\n`);

  if (opt.operations === "cash_withdrawal") {
    let amount = await inquirer.prompt([
      {
        name: "withdrawl_amount",
        message: chalk
          .hex("#000000")
          .bgYellow(` How much money do you want to withdraw?  `),
        type: "number",
      },
    ]);

    if (amount.withdrawl_amount > currentBalance) {
      console.log(
        chalk
          .hex("#ffffff")
          .bgRed(
            `\n  WARNING: Insufficient Balance. Your current balance is low: $${currentBalance}   \n`
          )
      );
    } else {
      currentBalance -= amount.withdrawl_amount;
      console.log(
        chalk
          .hex("#9b1fe9")
          .bgWhite(`\n  Your remaining balance is: $${currentBalance}   \n`)
      );
    }
  } else if (opt.operations === "fast_withdrawal") {
    let fastWithdraw = await inquirer.prompt([
      {
        name: "fast_Withdraw",
        message: chalk.hex("#000000").bgYellow(` Select fast withdraw:  `),
        type: "list",
        choices: [500, 1000, 2000, 5000],
      },
    ]);

    if (fastWithdraw.fast_Withdraw === 500) {
      currentBalance -= 500;
      console.log(
        chalk
          .hex("#9b1fe9")
          .bgWhite(`\n  Your remaining balance is: $${currentBalance}   \n`)
      );
    } else if (fastWithdraw.fast_Withdraw === 1000) {
      currentBalance -= 1000;
      console.log(
        chalk
          .hex("#9b1fe9")
          .bgWhite(`\n  Your remaining balance is: $${currentBalance}   \n`)
      );
    } else if (fastWithdraw.fast_Withdraw === 2000) {
      currentBalance -= 2000;
      console.log(
        chalk
          .hex("#9b1fe9")
          .bgWhite(`\n  Your remaining balance is: $${currentBalance}   \n`)
      );
    } else if (fastWithdraw.fast_Withdraw === 5000) {
      currentBalance -= 5000;
      console.log(
        chalk
          .hex("#9b1fe9")
          .bgWhite(`\n  Your remaining balance is: $${currentBalance}   \n`)
      );
    } else {
      console.log("Please select a valid option.");
    }
  } else if (opt.operations === "check_balance") {
    console.log(
      chalk
        .hex("#9b1fe9")
        .bgWhite(`  Your balance is: $${currentBalance}  \n`)
    );
  }
} else {
  console.log(chalk.hex("#ffffff").bgRed(`  ERROR: Invalid PIN number  \n`));
}
