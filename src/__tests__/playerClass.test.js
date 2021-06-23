/**
 * @jest-environment jsdom
 */

import Phaser from 'phaser';
import Player from '../Objects/player';
import Entity from '../Objects/Entities';
import BootScene from '../Scenes/BootScene';

jest.mock('../Objects/Entities');

beforeEach(() => {
  Entity.mockClear();
});

const mockGame = new Phaser.Game();
mockGame.scene.add('Boot', BootScene);

it('We can check if the consumer called the class constructor', () => {
  // eslint-disable-next-line no-unused-vars
  const playerInstance = new Player(mockGame.scene.getScene('Boot'), 1, 1, 'mockedPlayerKey');
  expect(Entity).toHaveBeenCalledTimes(1);
});

it('We can check if the consumer called a method on the class instance', () => {
  expect(Entity).not.toHaveBeenCalled();

  const mockMoveDown = jest.fn();
  jest.mock('../Objects/player', () => jest.fn().mockImplementation(() => ({ moveDown: mockMoveDown })));

  const playerInstance = new Player(mockGame.scene.getScene('Boot'), 1, 1, 'mockedPlayerKey');

  expect(Entity).toHaveBeenCalledTimes(1);

  playerInstance.moveDown(true);

  expect(playerInstance.moveDown).toBeInstanceOf(Function);
});