import inquirer from "inquirer";
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: ["Ms Office", "HTML", "Javascript", "Typescript", "phython"]
    }
]);
const tutionFee = {
    "Ms Office": 2000,
    "HTML": 2500,
    "Javascript": 5000,
    "Typescript": 6000,
    "Phython": 10000
};
console.log(`\nTution fees: ${tutionFee[answer.courses]}/-\n`);
console.log(`Balance: ${myBalance}\n`);
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["Bank Transfer", "Easypaisa", "Jazzcash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non-empty value.";
        },
    }
]);
console.log(`\nYou select payment method ${paymentType.payment}\n`);
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(`Congratulation, you have successfully enrolled in ${answer.courses}.\n`);
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next?",
            choices: ["View Status", "Exit"]
        }
    ]);
    if (ans.select === "View Status") {
        console.log("\n*********Status********\n");
        console.log(`Student Name: ${answer.students}`);
        console.log(`Student ID:  ${randomNumber}`);
        console.log(`Course: ${answer.courses}`);
        console.log(`Tution Fees Paid: ${paymentAmount}`);
        console.log(`Balance: ${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting Student Management System\n");
    }
}
else {
    console.log("Invalid amount due to course\n");
}
// let ans = await inquirer.prompt([
//     {
//         name:"select",
//         type:"list,",
//         message:"what would you like to do next",
//         choices:["view status","Exit"]
//     }
// ])
// if(ans.select === "view Status") {
//     console.log("\n status\n");
//     console.log(`Student Name: ${answer.students}`);
//     console.log(`Student ID: ${randomNumber}`);
//     console.log(`Course: ${answer.courses}`);
//     console.log(`Tution Fees Paid: ${paymentAmount}`);
//     console.log(`Balance: ${myBalance += paymentAmount}`);   
// }else {
//     console.log("\nExiting Student Management System\n");
//   }else {
//     console.log("invalid amount due to course\n");
// }
