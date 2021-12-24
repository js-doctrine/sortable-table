import { rest } from 'msw';
import { data } from './data';

export const handlers = [
  rest.get('/collection', (req, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.status(200),
      ctx.json(data),
    )
  }),
];
