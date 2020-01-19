function Fighter(player) {
	const totalhp = player.hp;

	this.getName = function() {
		return player.name;
	};
	this.getDamage = function() {
		return player.damage;
	};
	this.getStrength = function() {
		return player.strength;
	};
	this.getAgility = function() {
		return player.agility;
	};
	this.getHealth = function() {
		return player.hp;
	};
	this.attack = function(defender) {
		const percentage = 100;
		const probability = percentage - Math.min(defender.getStrength() + defender.getAgility(), percentage);
		const randomNumber = Math.round(Math.random() * percentage + 1);

		if (randomNumber < probability) {
			defender.dealDamage(this.getDamage());
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	};
	this.dealDamage = function(damage) {
		player.hp -= damage;
		player.hp < 0 ? player.hp = 0 : player.hp;
	};

	this.logCombatHistory = function() {
		console.log(`Name: ${this.getName()} Wins: ${wins}, Losses: ${loss}`);
	};
	this.heal = function(health) {
		(player.hp += health) > totalhp ? player.hp = totalhp : player.hp;
	};

	let wins = 0;
	let loss = 0;
	this.addWin = function() {
		wins++;
	};
	this.addLoss = function() {
		loss++;
	};
}

function battle(fighter1, fighter2) {
	if (fighter1.getHealth() === 0) {
		return console.log(`${fighter1.getName()} is dead and can't fight.`);
	} else if (fighter2.getHealth() === 0) {
		return console.log(`${fighter2.getName()} is dead and can't fight.`);
	}

	while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
		fighter1.attack(fighter2);
		if (fighter2.getHealth() > 0) {
			fighter2.attack(fighter1);
		}
		console.log('first p ' + fighter1.getHealth());
		console.log('second p ' + fighter2.getHealth());
	}
	if (fighter1.getHealth() > 0) {
		fighter1.addWin();
		fighter2.addLoss();
		console.log(`${fighter1.getName()} has won!`);
	} else {
		console.log(`${fighter2.getName()} has won!`);
		fighter2.addWin();
		fighter1.addLoss();
	}
}

const myFighter = new Fighter({ name: 'Maximus', damage: 40, hp: 80, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Nukole', damage: 30, hp: 100, strength: 10, agility: 20 });

// let damage = myFighter.getDamage();
// console.log('damage ' + damage);

// let strength = myFighter.getStrength();
// console.log('strength ' + strength);

// let agility = myFighter.getAgility();
// console.log('agility ' + agility);

// let health = myFighter.getHealth();
// console.log('max health ' + health);

// let health2 = myFighter2.getHealth();
// console.log('nic health ' + health2);

// myFighter.logCombatHistory();

// console.log('nik health with + ' + myFighter2.heal(10));

// let health2 = myFighter2.getHealth();
// console.log('nik health ' + health2);

// myFighter.addWin();
// myFighter.addLoss();

// battle(myFighter, myFighter2);
// battle(myFighter, myFighter2);
