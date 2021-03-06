'use strict';

const Controller = require('egg').Controller;

class DefaultController extends Controller {
  async index() {
    const { ctx, app } = this;
    const data = ctx.args[0];
    await ctx.socket.emit('res', `Hi! I've got your message: ${data.msg}`);
  }
}

module.exports = DefaultController;