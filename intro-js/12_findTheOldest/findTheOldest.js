const findTheOldest = function(people) {
    const validPeople = people.filter(person => person.yearOfBirth);
    const oldestPerson = validPeople.reduce((oldest, person) => {
        const age = person.yearOfDeath - person.yearOfBirth;
        const oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;  
      
        return age > oldestAge ? person : oldest;
      });

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
