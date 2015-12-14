/**
 * Created by elle on 12/9/15.
 */
import dispatcher from '../dispatcher';

const assign = require('object-assign');
const EventEmitterProto = require('events').EventEmitter.prototype;
const CHANGE_EVENT = 'CHANGE';

const storeMethods = {
  init() {},

  set(arr) {
    let currIds = this._data.map(m => m.cid);
    arr.filter((item) => currIds.indexOf(item.cid) === -1)
      .forEach(this.add, this);

    this.sort();
  },

  add(item) {
    this._data.push(item);
    this.sort();
  },

  all() {
    return this._data
  },

  sort() {
    this._data.sort((a,b) => {
      let aTimestamp = new Date(a.$created).getTime();
      let bTimestamp = new Date(b.$created).getTime();
      return bTimestamp - aTimestamp;
    })
  },

  get(id) {
    return this._data.filter((item) => item.cid === id)[0];
  },

  addChangeListener(fn) {
    this.on(CHANGE_EVENT, fn)
  },

  removeChangeListener(fn) {
    this.removeListener(CHANGE_EVENT, fn)
  },

  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  bind(actionType, actionFn) {
    if (this.actions[actionType]) {
      this.actions[actionType].push(actionFn)
    } else {
      this.actions[actionType] = [actionFn]
    }
  }
};

let extend = (methods) => {
  let store = {
    _data: [],
    actions: {},
    mixin: {
      componentDidMount(){
        store.addChangeListener(this.onChange);
      },
      componentWillUnmount(){
        store.removeChangeListener(this.onChange);
      }
    }
  };
  assign(store, EventEmitterProto, storeMethods, methods);
  store.init();

  dispatcher.register((action) => {
    let allActions = store.actions[action.actionType];
    if (allActions) {
      allActions.forEach((fn) => {
        fn.call(store, action.data);
        store.emitChange();
      })
    }
  });

  return store
};

export default extend