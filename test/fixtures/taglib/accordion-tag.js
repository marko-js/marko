var template = require('./accordion-tag.marko');

exports.renderer = function(input, out) {
  template.render(input, out);
};
