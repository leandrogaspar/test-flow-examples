const checkTitle = require('./create-title');
const createWs = require('./createWs');

const nodes = new Map();

nodes.set('checkTitle', checkTitle);
nodes.set('createWs', createWs);

module.exports = nodes;