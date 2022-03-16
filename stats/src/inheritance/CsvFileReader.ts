import fs from "fs";
import {MatchResults} from "./MatchResults";
import {DateStringToDate} from "./Utils";

export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(public filename: string) {}
  abstract mapRow(row: string[]): T;
  read() {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row) => row.split(","))
      .map(this.mapRow);
  }
}
