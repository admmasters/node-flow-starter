/* eslint no-console: 0 */
// @flow

class Person {
  name: string;
  speak() {
    console.log(`My name is: ${this.name}`);
  }
}

module.exports = Person;
