import {MatchResults} from "./MatchResults";

import {CsvFileReader} from "./CsvFileReader";
import {MatchReader} from "./MatchReader";
let manUnitedWins = 0;
const reader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();
reader.read();
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] == MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] == MatchResults.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Total No of Wins for Man United is ${manUnitedWins}`);
