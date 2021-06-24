const person = {
    firstName: 'John',
    lastName: 'Doe',
    set fullName(name) {
        if(typeof name !== 'string')
            throw new Error('Value is not a string');

        const parts = name.split(' ');
        if(parts.length !== 2)
            throw new Error('Enter FirstName and LastName');

        this.firstName = parts[0];
        this.lastName = parts[1];
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

try {
    person.fullName = "Test"; // using setter
}
catch(e) {
    console.log(e.message);
}

console.log(person.fullName); // using getter