class Person {
    constructor (name, age) {
        this.name = name,
        this.age = age
    }

    compareAge(person){
        if (this.age > person.age) {
            return person.name + " is younger than me.";
        }

        else if (this.age < person.age){
            return person.name + " is older than me.";
        }

        else {
            return person.name + " is the same age as me.";
        }
    }
}

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p2.compareAge(p3))