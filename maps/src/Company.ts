import faker from "@faker-js/faker";
import {Mappable} from "./CustomMap";
export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string;
  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lng: +faker.address.longitude(),
      lat: +faker.address.latitude(),
    };
  }
  markerContent = (): string => {
    return `Company Name: ${this.companyName}`;
  };
}
