/* globals __DEV__ */
import 'phaser-shim';

import background from '../sprites/background';
import mainPlayer from '../sprites/mainPlayer';
import bullets from '../sprites/bullets';

export default class extends Phaser.State {
    preload () {
        this.load.image('background', 'img/back.jpeg');
        this.load.image('mainPlayer', 'img/main.png');
        this.load.image('bullet', 'img/shot.png');
        this.load.spritesheet('animPlayer', 'img/mainPlayer.png', 135, 55, 10);
    }

    create () {
        this.background = new background({
            game: this,
            x: 0,
            y: 0,
            width: 1024,
            height: 768,
            asset: 'background'
        });
        this.game.add.existing(this.background);

        this.mainPlayer = new mainPlayer({
            game: this,
            x: this.game.world.centerX,
            y: this.game.world.centerY,
            asset: 'mainPlayer'
        });
        this.game.add.existing(this.mainPlayer);

        this.bullets = new bullets({
            game: this,
            parent: null,
            name: 'bull',
            addToStage: true,
            enableBody: true,
            physicsBodyType: Phaser.Physics.ARCADE
        });
        this.game.add.existing(this.bullets);

        this.physics.enable(this.mainPlayer, Phaser.Physics.ARCADE);
        this.bulletTime = 0;
        this.cursors = this.input.keyboard.createCursorKeys();
        this.fireButton = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    }

    update () {

        this.mainPlayer.body.velocity.x = 0;
        this.mainPlayer.body.velocity.y = 0;

        if(this.cursors.left.isDown){
            this.mainPlayer.body.velocity.x = -350;
        }
        if(this.cursors.right.isDown){
            this.mainPlayer.body.velocity.x = 350;
        }
        if(this.cursors.up.isDown){
            this.mainPlayer.body.velocity.y = -350;
        }
        if(this.cursors.down.isDown){
            this.mainPlayer.body.velocity.y = 350;
        }
        if(this.fireButton.isDown){
            this.bullets.fireBullet.call(this);
        }
    }

    /*render () {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.mainPlayer, 32, 32)
        }
    }*/
}
