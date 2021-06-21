import Phaser from 'phaser'
import {
  Player
} from '../Entities'

export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    this.load.image('things_gold', '../../src/assets/visual/things_gold.png');
    this.load.image('things_silver', '../../src/assets/visual/things_silver.png');
    this.load.image('enemyRed1', '../../src/assets/visual/enemyRed1.png');
    this.load.image('enemyRed3', '../../src/assets/visual/enemyRed3.png');

    this.load.spritesheet('sprExplosion', '../../src/assets/visual/sprExplosion.png', {
      frameWidth: 80,
      frameHeight: 80
    });


    this.load.spritesheet('sprPlayer', '../../src/assets/visual/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16
    });


    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion', {
        start: 2,
        end: 2
      }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer', {
        start: 0,
        end: 3
      }),
      frameRate: 20,
      repeat: -1
    });

  }


  create() {

    scoreText = this.add.text(660, 16, 'Score: 0', {
      fontSize: '20px',
      fill: '#ff0'
    });


    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprPlayer'
    );

    this.golds = this.physics.add.group({
      key: 'things_gold',
      setScale: {
        x: 0.7,
        y: 0.7
      },
      repeat: 7,
      setXY: {
        x: 40,
        y: 0,
        stepX: 70
      },
      bounceY: 1,
      bounceX: 1,
      collideWorldBounds: true
    });

    this.golds.setVelocityY(10, 40);
    this.golds.setVelocityX(5, 15);


    const goldCollected = (player, gold) => {
      gold.disableBody(true, true);
      score += 10;
      scoreText.setText('Score: ' + score);
      console.log('Score: ', score)
      if (this.golds.countActive(true) === 0) {
        console.log('no more silvers')
        this.golds.children.iterate(function (child) {

          child.enableBody(true, Phaser.Math.Between(100, 800), Phaser.Math.Between(100, 600), true, true);


        });
        this.golds.setVelocityY(5, 20);
        this.golds.setVelocityX(-5, -15);
      }
    }


    this.silvers = this.physics.add.group({
      key: 'things_silver',
      setScale: {
        x: 0.7,
        y: 0.7
      },
      repeat: 7,
      setXY: {
        x: 40,
        y: 30,
        stepX: 70
      },
      bounceY: 1,
      bounceX: 1,
      collideWorldBounds: true
    });

    this.silvers.setVelocityY(5, 20);
    this.silvers.setVelocityX(-5, -15);

    const silverCollected = (player, silver) => {
      silver.disableBody(true, true);
      score += 5;
      scoreText.setText('Score: ' + score);
      console.log('Score: ', score)
      if (this.silvers.countActive(true) === 0) {
        console.log('no more silvers')
        this.silvers.children.iterate(function (child) {

          child.enableBody(true, Phaser.Math.Between(100, 800), Phaser.Math.Between(100, 600), true, true);


        });
        this.silvers.setVelocityY(5, 20);
        this.silvers.setVelocityX(-5, -15);
      }

    }

    this.physics.add.overlap(this.player, this.golds, goldCollected, null, this);
    this.physics.add.overlap(this.player, this.silvers, silverCollected, null, this);

    const enemies1 = this.physics.add.group({
      key: 'enemyRed1',
      setScale: {
        x: 0.5,
        y: 0.5
      },
      repeat: 4,
      setXY: {
        x: 40,
        y: 30,
        stepX: 150
      },
      bounceY: 1,
      bounceX: 1,
      collideWorldBounds: true
    });


const enemiesCrashed = (player, enemy) => {
  enemy.disableBody(true, true);
  console.log('Game Over')
  this.scene.start("SceneGameOver", { score: score });

}

    enemies1.setVelocityY(5, 20);
    enemies1.setVelocityX(5, 15);
    this.physics.add.overlap(this.player, enemies1, enemiesCrashed, null, this);

    const enemies2 = this.physics.add.group({
      key: 'enemyRed3',
      setScale: {
        x: 0.5,
        y: 0.5
      },
      repeat: 3,
      setXY: {
        x: 100,
        y: 30,
        stepX: 120
      },
      bounceY: 1,
      bounceX: 1,
      collideWorldBounds: true
    });

    enemies2.setVelocityY(5, 20);
    enemies2.setVelocityX(-5, -15);
    this.physics.add.overlap(this.player, enemies2, enemiesCrashed, null, this);



  }



  update() {

    this.player.update();

    this.cursors = this.input.keyboard.createCursorKeys();

    if (this.cursors.up.isDown) {
      this.player.moveUp();

    } else if (this.cursors.down.isDown) {
      this.player.moveDown();
    }

    if (this.cursors.left.isDown) {
      this.player.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.player.moveRight();
    }


  }
}

let score = 0;
let scoreText;

