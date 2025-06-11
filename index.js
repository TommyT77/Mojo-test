import mojo from '@mojojs/core';

const app = mojo();

app.get('/', async ctx => {
  return ctx.render({ text: 'Hello from new Mojo.js!' });
});

app.start();
