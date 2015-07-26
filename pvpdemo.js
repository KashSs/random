
function user() {
    this.name = "";
    this.life = 100;
    this.defense = 5;
    this.bigAttack = function(targetPlayer) {
        targetPlayer.life -= 50;
        console.log(this.name + " attacked for 10 dmg to " + targetPlayer.name);
        console.log(goku.name + " has " + goku.life + " life!");
        console.log(sara.name + " has " + sara.life + " life!");
        if(targetPlayer.life < 1) {
            console.log(targetPlayer.name + " has died!");
    }};
    this.smallAttack = function(targetPlayer) {
        targetPlayer.life -= 3;
        console.log(this.name + " attacked for 3 dmg to " + targetPlayer.name);
        console.log(goku.name + " has " + goku.life + " life!");
        console.log(sara.name + " has " + sara.life + " life!");
        if(targetPlayer.life < 1) {
            console.log(targetPlayer.name + " has died!");
    }};
    this.giveLife = function(targetPlayer) {
        if(targetPlayer.life <= 0) {
        console.log(targetPlayer.name + " is already dead!");
    }
        if(targetPlayer.life >= 1) {
            targetPlayer.life += 10;
            console.log(this.name + " gave 10 life to " + targetPlayer.name);
            console.log(goku.name + " has " + goku.life + " life!");
            console.log(sara.name + " has " + sara.life + " life!");
        }

    }
}

var goku = new user();
var sara = new user();



goku.name = "Goku";
sara.name = "Sara";

goku.giveLife(sara);
sara.smallAttack(goku);
sara.smallAttack(goku);
sara.bigAttack(goku);
sara.bigAttack(goku);
sara.giveLife(goku
