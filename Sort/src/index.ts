import {Sorter} from "./Sorter";
import {NumberCollection} from "./NumberCollection";
import {characterCollection} from "./characterCollection";
import {LinkedList} from "./LinkedList";
// const numberCollection = new NumberCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
// sorter.sort();
// console.log(numberCollection.data);
// const CharacterCollection = new characterCollection("bXaayb");
// const sorter = new Sorter(CharacterCollection);
// sorter.sort();
// console.log(CharacterCollection.data, "==============OUTPUT==============");
const linkedlist = new LinkedList();
linkedlist.add(3);
linkedlist.add(2);
linkedlist.add(-5);
linkedlist.add(10);
linkedlist.add(1);
const sorter = new Sorter(linkedlist);
sorter.sort();
linkedlist.print();
