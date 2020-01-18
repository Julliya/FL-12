function Fighter(player) {
	let totalhp = player.hp;

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
		const probability = 100 - Math.min(defender.getStrength() + defender.getAgility(), 100);
		const randomNumber = Math.round(Math.random() * 100 + 1);

		if (randomNumber < probability) {
			console.log(defender.dealDamage(this.getDamage()));
			console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
		} else {
			console.log(`${this.getName()} attack missed`);
		}
	};
	this.dealDamage = function(damage) {
		player.hp -= damage;
		if (player.hp < 0) {
			return (player.hp = 0);
		} else {
			return player.hp;
		}
	};

	this.logCombatHistory = function() {
		console.log(`Name: ${this.getName()} Wins: 0, Losses: 0`);
	};
	this.heal = function(health) {
		return (player.hp += health) > totalhp ? totalhp : player.hp;
	};
}

// dealDamage йде в методі attack.

const myFighter = new Fighter({ name: 'Maximus', damage: 40, hp: 100, strength: 30, agility: 25 });
const myFighter2 = new Fighter({ name: 'Nukole', damage: 30, hp: 90, strength: 10, agility: 20 });

let name = myFighter.getName();
console.log('name ' + name);

let damage = myFighter.getDamage();
console.log('damage ' + damage);

let strength = myFighter.getStrength();
console.log('strength ' + strength);

let agility = myFighter.getAgility();
console.log('agility ' + agility); // 25

let health = myFighter.getHealth();
console.log('max health ' + health);
// 100

// let name1 = myFighter.name;
// console.log(name1);

myFighter.logCombatHistory();

myFighter.attack(myFighter2);

console.log('nik health with + ' + myFighter2.heal(10));

let health2 = myFighter2.getHealth();
console.log('nik health ' + health2);
