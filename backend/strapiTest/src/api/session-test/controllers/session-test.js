module.exports = {
  async sessionTest(ctx) {
    ctx.session.test = 'textValue';
    ctx.send({ message: 'Session set' });
  },
};