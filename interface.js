var showState = function (person) {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry");
};
var anakin = {
    name: "Anakin Skywalker",
    isHungry: true,
    children: ['Luke', 'Leia']
};
console.log(showState(anakin));
