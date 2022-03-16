import {User} from "./models/User";

const user = User.buildUser({id: 1});
// / A quick reminder on accessors
user.on("change", () => {
  console.log("user change", user);
});
user.fetch();
console.log(user);
// user.get("name");
// user.set({name: "John", age: 30});

// user.on("change", () => {
//   console.log("chnage # 1");
// });
// user.on("change", () => {
//   console.log("change # 2");
// });
// // console.log(user);
// user.trigger("change");

// import axios from "axios";
// axios.get("  http://localhost:3000/Users/1");
