'use strict';

/**
 * A set of functions called "actions" for `mailform`
 */

module.exports = {
  async customPostAction(ctx) {
    console.log("sent mail from IP ", ctx.ip);
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
        html: '<strong>Hello world!</strong>' + ctx.request.body,
      });
      ctx.response.status = 200;
    } catch {
      ctx.response.status = 502;
    }
  }
};
