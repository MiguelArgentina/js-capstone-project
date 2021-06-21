import 'phaser';

export default {
  width: 800,
  height: 600,
  dom: {
        createContainer: true
    },
  backgroundColor: "black",
  parent: 'phaser',
  type: Phaser.WEBGL,
  autoCenter: 1,
  scaleMode: 3,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  pixelArt: true,
  roundPixels: true
};
