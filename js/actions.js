/**
 * Created by elle on 12/9/15.
 */
import dispatcher from './dispatcher.js';
import constants from './constants.js';

let actions = {};

Object.keys(constants).forEach((key) => {
  let funcName = key.split('_').map((word, index) => {
    if (index == 0) {
      return word.toLowerCase();
    }

    return word[0] + word.slice(1).toLowerCase();
  }).join('');

  actions[funcName] = (data) => {
    dispatcher.dispatch({
      actionType: constants[key],
      data: data
    })
  };

});

export default actions;
