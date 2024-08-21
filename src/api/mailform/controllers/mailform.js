'use strict';

/**
 * A set of functions called "actions" for `mailform`
 */

module.exports = {
  async customPostAction(ctx) {
    if(ctx.request.body.isTest) {
      console.log("would send mail:", ctx.request.body.content);
      ctx.response.status = 200;
      return;
    };

    try {  
      await strapi.plugins['email'].services.email.send({
        to: 'kontakt@herzenshunde-griechenland.de',
        from: 'kontakt@herzenshunde-griechenland.de',
        subject: 'The Strapi Email plugin worked successfully 2',
        html: ctx.request.body.content,
      });
      ctx.response.status = 200;
    } catch {
      ctx.response.status = 502;
    }
  }
};
