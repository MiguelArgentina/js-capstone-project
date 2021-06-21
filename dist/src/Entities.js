import Phaser from 'phaser'

class Entity extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, key, type) {
    super(scene, x, y, key);
    this.scene.add.existing(this);
    this.scene.physics.world.enableBody(this, 0);
    this.setData("type", type);
    this.setData("isDead", false);
  }
}

class Player extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key, "Player");
    this.setData("speed", 200);
    //this.play("sprPlayer");
    this.setScale(2);
  }

  moveUp() {
    this.body.velocity.y = -this.getData("speed");
  }

  moveDown() {
    this.body.velocity.y = this.getData("speed");
  }

  moveLeft() {
    this.body.velocity.x = -this.getData("speed");
  }

  moveRight() {
    this.body.velocity.x = this.getData("speed");
  }

  update() {

    this.body.setVelocity(0, 0);

    this.x = Phaser.Math.Clamp(this.x, 0, this.scene.game.config.width);
    this.y = Phaser.Math.Clamp(this.y, 0, this.scene.game.config.height);
  }
}

class PlayerLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprLaserPlayer");
  }
}

class EnemyLaser extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, "sprLaserEnemy");
  }
}

class Enemy extends Entity {
  constructor(scene, x, y, key) {
    super(scene, x, y, key);
    this.setOrigin(0);
  }
}

class ShieldTile extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprShieldTile");
    this.setOrigin(0);
    this.setScale(2);
    this.setDepth(-2);
  }
}

class Explosion extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, "sprExplosion");
    this.play("sprExplosion");
    this.setOrigin(0);
    this.setScale(2);
    this.on("animationcomplete", function () {
      if (this) {
        this.destroy();
      }
    });
  }
}
 export { Player }