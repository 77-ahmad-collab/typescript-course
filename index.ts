// const test = () => {
//   return "Typsscript setup";
// };
// const result = test();
// console.log(result);

const profile = {
  userName: "Ahmad",
  age: 21,
  coords: {
    lat: 0,
    lng: 0,
  },
  setAge(age: number): void {},
};
// const {name, age}: {name: string; age: number} = profile;
const {
  age,
  userName,
  coords: {lat, lng},
}: {
  userName: string;
  age: number;
  coords: {
    lat: number;
    lng: number;
  };
  setAge(age: number): void;
} = profile;
