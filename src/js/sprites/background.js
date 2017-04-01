import 'phaser-shim';

export default class extends Phaser.TileSprite {
  constructor ({ game, x, y, width, height, asset }) {
    super(game, x, y, width, height, asset)
  }

  update () {
        this.tilePosition.x -= 2;
  }
}
