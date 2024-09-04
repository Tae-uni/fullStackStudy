'use strict';

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::todo.todo',
  ({ strapi }) => ({
    async find(ctx) {
      const { data, meta } = await super.find(ctx);
      return { data, meta };
    },
    async customAction(ctx) {
      ctx.body = 'strapi';
    }
  }));
