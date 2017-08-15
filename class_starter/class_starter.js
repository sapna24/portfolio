class Person {
  constructor(firstName, lastName, address) {
    this.first_name = firstName;
    this.last_name = lastName;
    this.person_address = address;
  }

  getPersonFullName() {
    return this.first_name + " " + this.last_name;
  }

  getPersonAddress() {
    return this.person_address;
  }
}

var TomCruise = new Person("Tom", "Cruise", "859 Scientology Ave");
document.getElementById("myName").innerText = TomCruise.getPersonFullName();
document.getElementById("myAddress").innerText = TomCruise.getPersonAddress();
