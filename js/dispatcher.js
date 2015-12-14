/**
 * Created by elle on 12/8/15.
 */
let flux = require('flux');

let dispatcher = new flux.Dispatcher();

dispatcher.register((action) => console.log(action));

export default dispatcher;