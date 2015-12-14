/**
 * Created by elle on 12/10/15.
 */
let crypto = require('crypto');
export function avatar(email) {
  if (!email) {
    return ''
  }

  let formatedEmail = crypto.createHash('md5').update(email).digest('hex');

  return `http://www.gravatar.com/avatar/${formatedEmail}?s=92`
}
