import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
import { gameApiRequest, createScore } from '../scoresApi';

export default class SceneGameOver extends Phaser.Scene {
  constructor() {
    super({ key: "SceneGameOver" });
  }

init(data){
  this.score = data.score;
}

preload(){

   this.load.html("form", "../../src/assets/form.html");
}

  create() {
    this.title = this.add.text(this.game.config.width * 0.5, 80, "GAME OVER", {
  fontFamily: 'monospace',
  fontSize: 48,
  fontStyle: 'bold',
  color: '#ffffff',
  align: 'center'
});
this.title.setOrigin(0.5);


  this.saveScore = this.add.text(432, 145, `Enter your name to save your score (${this.score}). Press ENTER when done`, {
  fontFamily: 'monospace',
  fontSize: 24,
  fontStyle: 'normal',
  color: '#ff0',
  align: 'center',
  wordWrap: { width: 500 }
});
this.saveScore.setOrigin(0.6);



this.nameInput = this.add.dom(400, 220).createFromCache("form");



    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    this.returnKey.on("up", event => {
        let name = this.nameInput.getChildByName("name");
        if(name.value != "") {
          console.log(name.value)
          let response
          gameApiRequest(null, "POST", createScore(name.value, this.score)).then((res) => {
            response = res;
            console.log(response);
            name.value = "";
            this.nameInput.visible = false;
          });
            
            
        }
    });


// Options
  this.menuButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'Menu', 'Title');
this.menuButton.setInteractive();
  this.menuButton.on("pointerup", function() {
      this.scene.start("Title");
    }, this);


  }
}