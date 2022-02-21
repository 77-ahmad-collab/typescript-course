/// <reference types="@types/google.maps" />

import {User} from "./User";
import {Company} from "./Company";
import {CustomMap} from "./CustomMap";
const user = new User();
const company = new Company();
const customMap = new CustomMap();
customMap.addMarker(user);
customMap.addMarker(company);
// new google.maps.Map(document.getElementById("map"), {
//   zoom: 1,
//   center: {
//     lat: 0,
//     lng: 0,
//   },
// });
