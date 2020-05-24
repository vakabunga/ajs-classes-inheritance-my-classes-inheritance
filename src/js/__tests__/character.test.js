import Character from '../character';
import Bowman from '../bowman';
import Daemon from '../daemon';
import Magician from '../magician';
import Swordsman from '../swordsman';
import Undead from '../undead';
import Zombie from '../zombie';


describe('Character:', () => {
  test('should create a new Object', () => {
    const result = new Character('result');
    expect(result).toEqual({ name: 'result', level: 1, health: 100 });
  });
  test('should create Bowman extends from Character', () => {
    const result = new Bowman('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 25,
      defence: 25,
    });
  });
  test('should create Daemon extends from Character', () => {
    const result = new Daemon('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    });
  });
  test('should create Magician extends from Character', () => {
    const result = new Magician('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 10,
      defence: 40,
    });
  });
  test('should create Swordsman extends from Character', () => {
    const result = new Swordsman('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 40,
      defence: 10,
    });
  });
  test('should create Undead extends from Character', () => {
    const result = new Undead('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 25,
      defence: 25,
    });
  });
  test('should create Zombie extends from Character', () => {
    const result = new Zombie('result');
    expect(result).toEqual({
      name: 'result',
      level: 1,
      health: 100,
      attack: 40,
      defence: 10,
    });
  });
});
