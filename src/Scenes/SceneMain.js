import Phaser from 'phaser'
import { Player } from '../Entities'
export default class SceneMain extends Phaser.Scene {
  constructor() {
    super('SceneMain');
  }

  preload() {
    this.load.image('things_gold', '../../src/assets/visual/things_gold.png');
    this.load.image('things_silver', '../../src/assets/visual/things_silver.png');
    this.load.image('enemyRed1', '../../src/assets/visual/enemyRed1.png');
    this.load.image('enemyRed3', '../../src/assets/visual/enemyRed3.png');
    
    this.load.image('sprBg1', '../../src/assets/visual/sprBg1.png');
    this.load.spritesheet('sprExplosion', '../../src/assets/visual/sprExplosion.png', {
      frameWidth: 80,
      frameHeight: 80
    });
   
  
this.load.spritesheet('sprEnemy0', '../../src/assets/visual/sprEnemy0.png', {
      frameWidth: 16,
      frameHeight: 16
    });

    this.anims.create({
      key: 'enemy0',
      frames: this.anims.generateFrameNumbers('sprEnemy0', { start: 0, end: 2 }),
      frameRate: 20,
      repeat: -1
    });


    this.load.image('sprLaserEnemy0', '../../src/assets/visual/sprLaserEnemy0.png');
    this.load.image('sprLaserPlayer', '../../src/assets/visual/sprLaserPlayer.png');
    this.load.spritesheet('sprPlayer', '../../src/assets/visual/sprPlayer.png', {
      frameWidth: 16,
      frameHeight: 16
    });
    this.load.audio('sndExplode0', ['../../src/assets/TownTheme.mp3']);
    //this.load.audio('sndExplode0', ['../../src/assets/sound/sndExplode0.wav']);
    this.load.audio('sndExplode1', '../../src/assets/sound/sndExplode1.wav');
    this.load.audio('sndLaser', '../../src/assets/sound/sndLaser.wav');

    


    this.anims.create({
      key: 'sprEnemy2',
      frames: this.anims.generateFrameNumbers('sprEnemy2', { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'sprExplosion',
      frames: this.anims.generateFrameNumbers('sprExplosion', { start: 2, end: 2 }),
      frameRate: 20,
      repeat: -1
    });

    this.anims.create({
      key: 'sprPlayer',
      frames: this.anims.generateFrameNumbers('sprPlayer', { start: 0, end: 3 }),
      frameRate: 20,
      repeat: -1
    });


    // this.sfx = {
    //   explosions: [
    //     this.sound.add('sndExplode0'),
    //     this.sound.add('sndExplode1')
    //   ],
    //   laser: this.sound.add('sndLaser')
    // };



 





  }

  
  create() {
    this.player = new Player(
      this,
      this.game.config.width * 0.5,
      this.game.config.height * 0.5,
      'sprPlayer'
    );

    const golds = this.physics.add.group({
    key: 'things_gold',
    setScale: { x: 0.7, y: 0.7},
    repeat: 9,
    setXY: { x: 40, y: 0, stepX: 70 },
    bounceY: 1,
    bounceX: 1,
    collideWorldBounds: true
});

    golds.setVelocityY(10, 40);
    golds.setVelocityX(5, 15);
    this.physics.add.overlap(this.player, golds, goldCollected, null, this);

    const silvers = this.physics.add.group({
    key: 'things_silver',
    setScale: { x: 0.7, y: 0.7},
    repeat: 9,
    setXY: { x: 40, y: 30, stepX: 70 },
    bounceY: 1,
    bounceX: 1,
    collideWorldBounds: true
});

    silvers.setVelocityY(5, 20);
    silvers.setVelocityX(-5, -15);
    this.physics.add.overlap(this.player, silvers, silverCollected, null, this);


 const enemies1 = this.physics.add.group({
    key: 'enemyRed1',
    setScale: { x: 0.5, y: 0.5},
    repeat: 4,
    setXY: { x: 40, y: 30, stepX: 150 },
    bounceY: 1,
    bounceX: 1,
    collideWorldBounds: true
});

    enemies1.setVelocityY(5, 20);
    enemies1.setVelocityX(5, 15);
    this.physics.add.overlap(this.player, enemies1, enemiesCrashed, null, this);

const enemies2 = this.physics.add.group({
    key: 'enemyRed3',
    setScale: { x: 0.5, y: 0.5},
    repeat: 3,
    setXY: { x: 100, y: 30, stepX: 120 },
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

const enemiesCrashed = (player, enemy) => {
    enemy.disableBody(true, true);
    console.log('Game Over')
}

const goldCollected = (player, gold) => {
    gold.disableBody(true, true);
    console.log('gold collected')
}

const silverCollected = (player, silver) => {
    silver.disableBody(true, true);
    console.log('silver collected')
}
