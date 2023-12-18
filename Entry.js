class Entry {
  // Constructor method to initialize object properties
  constructor(name, skills, startMonth, endMonth, year, description) {
    this.name = name;
    this.skills = skills;
    this.startMonth = startMonth;
    this.endMonth = endMonth;
    this.year = year;
    this.description = description;
  }

  // Method to display information about the person
  displayInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

export default Entry;
