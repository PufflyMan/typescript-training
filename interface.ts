interface PersonState {
    name:  string;
    isHungry: boolean;
}

const showState = (person: PersonState) => {
    return person.name + " is " + (person.isHungry ? "hungry" : "not hungry")
}

let anakin = {
    name: "Anakin Skywalker",
    isHungry: true,
    children: ['Luke', 'Leia']
}

console.log(showState(anakin));