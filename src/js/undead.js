import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.attack = 25;
    this.defence = 25;
  }
}
