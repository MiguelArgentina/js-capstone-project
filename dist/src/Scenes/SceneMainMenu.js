import Phaser from 'phaser'

export default class SceneMainMenu extends Phaser.Scene {
  constructor() {
    super('SceneMainMenu');
  }
preload() {
  
this.load.image("sprBtnPlay", "../../src/assets/visual/sprBtnPlay.png");
this.load.image("sprBtnPlayHover", "../../src/assets/visual/sprBtnPlayHover.png");
this.load.image("sprBtnPlayDown", "../../src/assets/visual/sprBtnPlayDown.png");
this.load.image("sprBtnRestart", "../../src/assets/visual/sprBtnRestart.png");
this.load.image("sprBtnRestartHover", "../../src/assets/visual/sprBtnRestartHover.png");
this.load.image("sprBtnRestartDown", "../../src/assets/visual/sprBtnRestartDown.png");

this.load.audio("sndBtnOver", "../../src/assets/sound/sndBtnOver.wav");
this.load.audio("sndBtnDown", "../../src/assets/sound/sndBtnDown.wav");

}

  create() {
    this.scene.start("SceneMain");
  }
}
