import Character from './character';

// eslint-disable-next-line no-unused-vars
export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.attack = 10;
    this.defence = 40;
  }
}
