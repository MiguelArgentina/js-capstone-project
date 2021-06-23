import Phaser from 'phaser';

import config from './Config/config';
import BootScene from './Scenes/BootScene';
import PreloaderScene from './Scenes/PreloaderScene';
import TitleScene from './Scenes/TitleScene';
import OptionsScene from './Scenes/OptionsScene';
import CreditsScene from './Scenes/CreditsScene';
import SceneMainMenu from './Scenes/SceneMainMenu';
import SceneMain from './Scenes/SceneMain';
import SceneGameOver from './Scenes/SceneGameOver';
import SceneScoreBoard from './Scenes/SceneScoreBoard';

import Model from './Objects/Model';

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Title', TitleScene);
    this.scene.add('Options', OptionsScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('SceneMainMenu', SceneMainMenu);
    this.scene.add('SceneMain', SceneMain);
    this.scene.add('SceneGameOver', SceneGameOver);
    this.scene.add('SceneScoreBoard', SceneScoreBoard);

    this.scene.start('Boot');
  }
}

window.game = new Game();