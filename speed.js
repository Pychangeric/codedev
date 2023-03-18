const speed = 80;
const speedLimit = 70;
const kmPerDemeritPoint = 5;

if (speed <= speedLimit) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
  console.log(`Demerit points: ${demeritPoints}`);
}