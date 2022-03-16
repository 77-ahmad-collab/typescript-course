"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResults_1 = require("./MatchResults");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchReader_1 = require("./MatchReader");
let manUnitedWins = 0;
const reader = new CsvFileReader_1.CsvFileReader("football.csv");
const matchReader = new MatchReader_1.MatchReader(reader);
matchReader.load();
reader.read();
for (let match of matchReader.matches) {
    if (match[1] === "Man United" && match[5] == MatchResults_1.MatchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] == MatchResults_1.MatchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Total No of Wins for Man United is ${manUnitedWins}`);
