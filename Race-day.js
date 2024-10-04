let raceNumber = Math.floor(Math.random() * 1000);
const early = false;
const age = 18;

if(early && age > 18) {
  raceNumber += 1000;
}
if(early && age > 18) {
  console.log(`Race time: 9:30 am.  Race-Number:${raceNumber}`);
} else if(!early && age > 18) {
  console.log(`Race time: 11:00 am.  Race-Number:${raceNumber}`)
} else if(age < 18) {
  console.log(`Race time: 12:30 am.  Race-Number:${raceNumber}`)
} else {
  console.log(`See the registration desk.`)
}
