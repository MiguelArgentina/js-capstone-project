import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import {
  gameApiRequest,
} from '../scoresApi';

export default class SceneScoreBoard extends Phaser.Scene {
  constructor() {
    super('sceneScoreBoard');
  }

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 80, 'Scoreboard', {
      fontFamily: 'monospace',
      fontSize: 46,
      fontStyle: 'bold',
      color: '#ff0',
      align: 'center',
    });
    this.title.setOrigin(0.5);

    gameApiRequest(null, 'GET', '')
      .then((res) => {
        let tempArr = [];
        tempArr = res.result.sort((a, b) => b.score - a.score).slice(0, 10);
        for (let i = 0; i < tempArr.length; i += 1) {
          this.add.text(this.game.config.width * 0.33, 80 + (i + 1) * 35, `${i + 1}º: ${tempArr[i].user}: ${tempArr[i].score}`, {
            fontFamily: 'monospace',
            fontSize: 19,
            fontStyle: 'bold',
            color: '#fa5',
            align: 'left',
          }).setOrigin(0);
        }
      });
    this.menuButton = new Button(this, config.width / 2, config.height - 100, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.menuButton.setInteractive();
    this.menuButton.on('pointerup', () => {
      this.scene.start('Title');
    }, this);
  }
}