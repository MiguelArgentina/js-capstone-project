export default function boostUpSpeed(boost, speed) {
  if (boost === 'boost') {
    speed *= -2;
  } else {
    speed *= -1;
  }
  return speed;
}