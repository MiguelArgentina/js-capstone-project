import 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import { gameApiRequest, createScore } from '../scoresApi';

export default class SceneScoreBoard extends Phaser.Scene {
  constructor () {
    super('sceneScoreBoard');
  }

  create () {
    
   this.title = this.add.text(this.game.config.width * 0.5, 80, "Scoreboard", {
  fontFamily: 'monospace',
  fontSize: 46,
  fontStyle: 'bold',
  color: '#ff0',
  align: 'center'
});
this.title.setOrigin(0.5);

gameApiRequest(null, "GET", '')
.then((res) => {

  let tempArr = [];

for(let i = 0; i < res['result'].length; i+= 1){
  tempArr.push(res['result'][i])
}

tempArr.sort(function(a, b) {
    return b.score - a.score;
});
tempArr = tempArr.slice(0, 10)
  console.log(tempArr)
})



// Options
  this.menuButton = new Button(this, config.width/2, config.height - 100, 'blueButton1', 'blueButton2', 'Menu', 'Title');
this.menuButton.setInteractive();
  this.menuButton.on("pointerup", function() {
      this.scene.start("Title");
    }, this);
  }
};