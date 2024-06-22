'use strict';

/**
 * animals-page service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::animals-page.animals-page');
