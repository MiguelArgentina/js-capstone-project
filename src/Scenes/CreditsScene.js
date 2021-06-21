import 'phaser';
import config from '../Config/config';

export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Miguel Tucu Gomez', { fontSize: '26px', fill: '#fff' });
    this.twitterText = this.add.text(0, 0, 'Twitter: @Qete_arg', { fontSize: '24px', fill: '#39a1f2' });
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.twitterText,
      this.zone
    );

    this.madeByText.setY(1000);
    this.twitterText.setY(1100);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 800,
      delay: 2800,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.madeByTween.destroy;
      }.bind(this)
    });

    this.twitterTextTween = this.tweens.add({
      targets: this.twitterText,
      y: -400,
      ease: 'Power1',
      duration: 9000,
      delay: 1000,
      onComplete: function () {
        this.twitterText.destroy;
        this.scene.start('Title');
      }.bind(this)
    });

  }
};