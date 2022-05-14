#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.green.bold("email")}?`,
                value: () => {
                    open("mailto:contact@detzz.in.th");
                    console.log("\nDone, see you soon at inbox.\n");
                }
            },
            // {
            //     name: `Download my ${chalk.magentaBright.bold("Resume")}?`,
            //     value: () => {
            //         // cliSpinners.dots;
            //         const loader = ora({
            //             text: ' Downloading Resume',
            //             spinner: cliSpinners.material,
            //         }).start();
            //         let pipe = request('https://anmolsingh.me/api/resume').pipe(fs.createWriteStream('./anmol-resume.html'));
            //         pipe.on("finish", function () {
            //             let downloadPath = path.join(process.cwd(), 'anmol-resume.html')
            //             console.log(`\nResume Downloaded at ${downloadPath} \n`);
            //             open(downloadPath)
            //             loader.stop();
            //         });
            //     }
            // },
            // {
            //     name: `Schedule a ${chalk.redBright.bold("Meeting")}?`,
            //     value: () => {
            //         open('https://calendly.com/anmol098/30min');
            //         console.log("\n See you at the meeting \n");
            //     }
            // },
            {
                name: "Just quit.",
                value: () => {
                    console.log("左様なら\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("            Suphakit Pinyoworapot"),
    handle: chalk.white("@anmol098"),
    work: `${chalk.white("Founder & Artist @")} ${chalk
        .hex("#FF7F50")
        .bold("JentaJuice")}`,
    twitter: chalk.white("https://twitter.com/") + chalk.cyan("JojiDetzz"),
    github: chalk.white("https://github.com/") + chalk.green("dethMastery"),
    web: chalk.cyan("https://suphakit.net"),
    npx: chalk.red("npx") + " " + chalk.white("dethz"),

    labelWork: chalk.white.bold("       Work:"),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.italic(
            "Hello, world. I'm Suphakit P."
        )}`,
        `${chalk.italic(
            "I'm a Front-End Developer (with a little of"
        )}`,
        `${chalk.italic(
            "Back-End Skill) & Music Composer. If you want"
        )}`,
        `${chalk.italic(
            "to work with me just feel free to contact me ;)"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "green"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
