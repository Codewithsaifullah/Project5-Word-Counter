#! usr/bin/env node

import inquirer from "inquirer";

const answers:{
    Sentence: string;
} = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Please enter a Sentence to count the words:"
    }
])

let words = answers.Sentence.trim().split(" ")
console.log(`Your Sentence Word Count is ${words.length} words`)