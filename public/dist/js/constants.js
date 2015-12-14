'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by elle on 12/9/15.
 */
// use constants object for name actions
//present time in name - for FE actions
//past time in name = for BE actions
exports.default = {
  CHIRP: Symbol('CHIRP'),
  CHIRPED: Symbol('CHIRPED'),
  GOT_CHIRPS: Symbol('GOT_CHIRPS'),

  GOT_CURRENT_USER: Symbol('GOT_CURRENT_USERS'),
  GOT_USERS: Symbol('GOT_USERS'),

  FOLLOW: Symbol('FOLLOW'),
  FOLLOWED: Symbol('FOLLOWED'),

  UNFOLLOW: Symbol('FOLLOW'),
  UNFOLLOWED: Symbol('FOLLOWED')

};