'use strict';

function BulletManager(game)
{
var self = this;

self.playerBulletGroups = [];

var enemyMaxBullets= 300;
var playerMaxBullets = 200;

var enemyBulletPool = enemyMaxBullets;
var playerBulletPool = playerMaxBullets;

/*
var playerArrowBullets = game.add.group();
playerArrowBullets.enableBody = true;
playerArrowBullets.physicsBodyType = Phaser.Physics.ARCADE;
playerArrowBullets.createMultiple(playerBulletPool, 'arrow');
*/
var playerMagicBullets = game.add.group();
playerMagicBullets.enableBody = true;
playerMagicBullets.physicsBodyType = Phaser.Physics.ARCADE;
playerMagicBullets.createMultiple(playerBulletPool, 'magic');


//knight bullet
var playerBullets1 = game.add.group();
playerBullets1.enableBody = true;
playerBullets1.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets1.createMultiple(playerBulletPool, 'bullet1');

//elf bullet
var playerBullets2 = game.add.group();
playerBullets2.enableBody = true;
playerBullets2.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets2.createMultiple(playerBulletPool, 'bullet2');

//mage bullet
var playerBullets3 = game.add.group();
playerBullets3.enableBody = true;
playerBullets3.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets3.createMultiple(playerBulletPool, 'bullet3');

//viking bullet
var playerBullets4 = game.add.group();
playerBullets4.enableBody = true;
playerBullets4.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets4.createMultiple(playerBulletPool, 'bullet4');

//ninja bullet
var playerBullets5 = game.add.group();
playerBullets5.enableBody = true;
playerBullets5.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets5.createMultiple(playerBulletPool, 'bullet5');

//warlock bullet
var playerBullets6 = game.add.group();
playerBullets6.enableBody = true;
playerBullets6.physicsBodyType = Phaser.Physics.ARCADE;
playerBullets6.createMultiple(playerBulletPool, 'bullet6');


self.playerBulletGroups.push(playerBullets1);
self.playerBulletGroups.push(playerBullets2);
self.playerBulletGroups.push(playerBullets3);
self.playerBulletGroups.push(playerBullets4);
self.playerBulletGroups.push(playerBullets5);
self.playerBulletGroups.push(playerBullets6);

/*
self.playerBulletGroups.push(playerArrowBullets);
self.playerBulletGroups.push(playerMagicBullets);
*/

self.enemyBulletGroups = [];

var enemyGenericBullets = game.add.group();
enemyGenericBullets.enableBody = true;
enemyGenericBullets.physicsBodyType = Phaser.Physics.ARCADE;
enemyGenericBullets.createMultiple(enemyBulletPool, 'magic');

self.enemyBulletGroups.push(enemyGenericBullets);

//blue
var enemyBullets1 = game.add.group();
enemyBullets1.enableBody = true;
enemyBullets1.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets1.createMultiple(enemyBulletPool, 'enemyBullet1');

//spike
var enemyBullets2 = game.add.group();
enemyBullets2.enableBody = true;
enemyBullets2.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets2.createMultiple(enemyBulletPool, 'enemyBullet2');

//bone
var enemyBullets3 = game.add.group();
enemyBullets3.enableBody = true;
enemyBullets3.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets3.createMultiple(enemyBulletPool, 'enemyBullet3');

//yellow
var enemyBullets4 = game.add.group();
enemyBullets4.enableBody = true;
enemyBullets4.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets4.createMultiple(enemyBulletPool, 'enemyBullet4');

//red
var enemyBullets5 = game.add.group();
enemyBullets5.enableBody = true;
enemyBullets5.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets5.createMultiple(enemyBulletPool, 'enemyBullet5');

//fireball
var enemyBullets6 = game.add.group();
enemyBullets6.enableBody = true;
enemyBullets6.physicsBodyType = Phaser.Physics.ARCADE;
enemyBullets6.createMultiple(enemyBulletPool, 'enemyBullet6');

self.enemyBulletGroups.push(enemyBullets1);
self.enemyBulletGroups.push(enemyBullets2);
self.enemyBulletGroups.push(enemyBullets3);
self.enemyBulletGroups.push(enemyBullets4);
self.enemyBulletGroups.push(enemyBullets5);
self.enemyBulletGroups.push(enemyBullets6);

self.enemyBulletCount;
self.playerBulletCount;

//var bulletSpeed = 200;

//var bulletLifespan = 1000;

var scale = (listOfGroups) =>
	{
	for (var i = 0; i < listOfGroups.length; i++)
		{
		listOfGroups[i].setAll('scale.x', scalingFactors.x);
		listOfGroups[i].setAll('scale.y', scalingFactors.y);
		}
	};

// Type of bullet, player which shot the bullet, if enemybullet then -1, bullet direction, bullet position
self.createBullet = (type, damage, playerid, angle, pos, bulletSpeed, bulletLifespan) =>
	{
	if (playerid >= 0)
		{
		if (playerBulletPool > 0)
			{
			switch (type)
				{
//				case 'arrow':
//					var bullet = playerArrowBullets.getFirstDead();
//					// Other type spesific attributes
//					break;
//				case 'magic':
//					var bullet = playerMagicBullets.getFirstDead();
//					/*var flame = self.game.add.sprite(pos.x, pos.y, 'flame');
//					self.game.physics.enable(flame, Phaser.Physics.ARCADE);
//					flame.anchor.setTo(0.5, 0.5);
//					flame.alpha = 1;
//					self.game.add.tween(flame).to({alpha: 0}, 100, "Linear", true);
//					self.game.physics.arcade.velocityFromAngle(angle, self.bulletSpeed, flame.body.velocity);
//					flame.events.onOutOfBounds.add(flame.destroy, this);*/
//					break;
				case 'bullet1':
					var bullet = playerBullets1.getFirstDead();
					break;
				case 'bullet2':
					var bullet = playerBullets2.getFirstDead();
					break;
				case 'bullet3':
					var bullet = playerBullets3.getFirstDead();
					break;
				case 'bullet4':
					var bullet = playerBullets4.getFirstDead();
					break;
				case 'bullet5':
					var bullet = playerBullets5.getFirstDead();
					break;
				case 'bullet6':
					var bullet = playerBullets6.getFirstDead();
					break;
				default:
					var bullet = playerMagicBullets.getFirstDead();
				}
			bullet.playerId = playerid;
			playerBulletPool--;
			}
		} else
		{
		if (enemyBulletPool > 0)
			{
			switch (type)
				{
				case 'enemyBullet1':
					var bullet = enemyBullets1.getFirstDead();
					break;
				case 'enemyBullet2':
					var bullet = enemyBullets2.getFirstDead();
					break;
				case 'enemyBullet3':
					var bullet = enemyBullets3.getFirstDead();
					break;
				case 'enemyBullet4':
					var bullet = enemyBullets4.getFirstDead();
					break;
				case 'enemyBullet5':
					var bullet = enemyBullets5.getFirstDead();
					break;
				case 'enemyBullet6':
					var bullet = enemyBullets6.getFirstDead();
					break;
				default:
					var bullet = enemyGenericBullets.getFirstDead();
				}
			enemyBulletPool--;
			}
		}
	if (bullet != undefined)
		{
		bullet.anchor.setTo(0.5, 0.5);
		bullet.reset(pos.x, pos.y);
		bullet.lifespan = bulletLifespan;
		bullet.body.setSize(bullet.width, bullet.width); //26x26 box
		bullet.angle = angle + 90;
		game.physics.arcade.velocityFromAngle(angle, bulletSpeed, bullet.body.velocity);
		bullet.damage = damage;
		}
	};

self.killbullet = (bullet) =>
	{
	bullet.kill()
	};

self.update = () =>
	{
	scale(self.enemyBulletGroups);
	scale(self.playerBulletGroups);

	self.enemyBulletCount = countLiveBullets(self.enemyBulletGroups);
	self.playerBulletCount = countLiveBullets(self.playerBulletGroups);
	enemyBulletPool = enemyMaxBullets - self.enemyBulletCount;
	playerBulletPool = playerMaxBullets - self.playerBulletCount;
	//console.log(enemyBulletPool)
	};

var countLiveBullets = (groupList) =>
	{
	var count = 0;
	for (var i = 0; i < groupList.length; i++)
		{
		count += groupList[i].countLiving();
		}
	return count;
	};
}



