export default function updateScore(pill, currentScore) {
  if (pill === 'gold') {
    currentScore += 10;
  } else {
    currentScore += 5;
  }
  return currentScore;
}