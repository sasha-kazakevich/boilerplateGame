import 'phaser-shim';

export default class extends Phaser.Sprite {
  constructor ({ game, x, y, asset }) {
    super(game, x, y, asset)
    this.anchor.setTo(0.5)
  }

  update () {
        this.scale.setTo(0.8);// scale
        this.angle = 90;

  }
}
