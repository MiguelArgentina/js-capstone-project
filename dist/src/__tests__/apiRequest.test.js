import 'regenerator-runtime/runtime';
import { gameApiRequest } from '../scoresApi';

it('requests the scores from the API', () => {
  gameApiRequest(null, 'GET', '')
    .then((res) => {
      expect(Object.keys(res)).toContain('result');
    });
});