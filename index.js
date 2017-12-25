const {Model} = require('shared_models');
const {createModel} = require('model_utility');

const model = createModel('test');

console.log(model instanceof Model); // false (even though it's the "same" class)

console.log(model instanceof require('model_utility/node_modules/shared_models').Model); // true