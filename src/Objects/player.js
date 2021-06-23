import Phaser from 'phaser';
import Entity from './Entities';
import boostUpSpeed from '../assets/helpers/boostSpeed';

export default class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, 'Player');
    this.setData('speed', 200);
    this.setScale(2);
  }

  moveUp(boost = false) {
    this.body.velocity.y = boost ? boostUpSpeed('boost', this.getData('speed')) : boostUpSpeed('', this.getData('speed'));
  }

  moveDown(test = false) {
    if (test === false) {
      this.body.velocity.y = this.getData('speed');
    }
  }

  moveLeft() {
    this.body.velocity.x = -this.getData('speed');
  }

  moveRight() {
    this.body.velocity.x = this.getData('speed');
  }

  update() {
    this.body.setVelocity(0, 0);

    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  }
}
