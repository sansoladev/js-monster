const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK ='STRONG_ATTACK';

// const enteredValue = prompt('Enter Max Life', '100');
const enteredValue = 100;

let maxLife = parseInt(enteredValue);

if (isNaN(maxLife) || maxLife <= 0) {
  maxLife = 100;
}
let currentPlayerHealth = maxLife;
let currentMonsterHealth = maxLife;

adjustHealthBars(maxLife);

function endRound(){
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0){
    alert('You Won!');
  } else if (currentMonsterHealth > 0 && currentPlayerHealth <= 0){
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){
    alert('You have a draw!');
  }
}

function attackMonster(mode) {
  const maxDamage = 
    mode === MODE_ATTACK 
      ? ATTACK_VALUE 
      : STRONG_ATTACK_VALUE;

  currentMonsterHealth -= dealMonsterDamage(maxDamage);
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
  attackMonster(MODE_STRONG_ATTACK);
}

function healPlayer(){
  let healValue;
  if(currentPlayerHealth >= maxLife - HEAL_VALUE){
    alert('cant heal more than max initial value')
    healValue = maxLife - currentPlayerHealth
  } else if ( currentMonsterHealth <= 0){
    healValue = 0;
  } else{
    healValue = HEAL_VALUE;
  }

  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;

  endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer)
