import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Magician extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}
