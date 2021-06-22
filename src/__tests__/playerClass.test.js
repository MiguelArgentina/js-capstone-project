/**
 * @jest-environment jsdom
 */

import Phaser from 'phaser';
import Player from '../player';
import BootScene from '../Scenes/BootScene';

const mockGame = new Phaser.Game();
mockGame.scene.add('Boot', BootScene);

it('We can check if the consumer called the class constructor', () => {
  let aux = 0;
  const playerConsumer = new Player(mockGame.scene.getScene('Boot'), 1, 1, 'mockedPlayerKey');
  if (playerConsumer == null) {
    aux += 1;
  } else {
    aux += -1;
  }
  expect(Player).toHaveBeenCalledTimes(1);
  return aux;
});
