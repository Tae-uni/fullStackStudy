module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/session-test',
      handler: 'session-test.sessionTest',
      config: {
        policies: [],
      },
    },
  ],
};