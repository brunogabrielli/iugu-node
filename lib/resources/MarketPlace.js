'use strict';

var IuguResource = require('../IuguResource');
var iuguMethod = IuguResource.method;

module.exports = IuguResource.extend({
  path: 'marketplace',

  create_account: iuguMethod({
    method: 'POST',
    path: 'create_account'
  })
});
