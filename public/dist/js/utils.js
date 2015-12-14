'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.avatar = avatar;
/**
 * Created by elle on 12/10/15.
 */
var crypto = require('crypto');
function avatar(email) {
  if (!email) {
    return '';
  }

  var formatedEmail = crypto.createHash('md5').update(email).digest('hex');

  return 'http://www.gravatar.com/avatar/' + formatedEmail + '?s=92';
}