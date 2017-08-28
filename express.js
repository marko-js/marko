var target = 'MARKO_DEBUG' ? 'marko/src/express' : 'marko/dist/express';

module.exports = module.parent ?
    module.parent.require(target) :
    require(target);

