'use strict';

/**
 * bilhete service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bilhete.bilhete');
