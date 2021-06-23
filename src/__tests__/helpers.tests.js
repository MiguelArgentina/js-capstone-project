import boostUpSpeed from '../assets/helpers/boostSpeed';
import updateScore from '../assets/helpers/updateScore';

it('returns a new score based on the pill collected', () => {
  const currentScore = 0;
  expect(updateScore('gold', currentScore)).toBe(10);
  expect(updateScore('silver', currentScore)).toBe(5);
});

it('doubles the speed if the player presses Shift key Up arrow', () => {
  const currentSpeed = 100;
  expect(boostUpSpeed('boost', currentSpeed)).toEqual(-200);
  expect(boostUpSpeed('', currentSpeed)).not.toEqual(-200);
});
