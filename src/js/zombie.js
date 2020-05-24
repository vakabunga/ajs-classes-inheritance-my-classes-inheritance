import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.attack = 40;
    this.defence = 10;
  }
}
