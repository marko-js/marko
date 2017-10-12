var expect = require('chai').expect;

module.exports = function(helpers) {
    helpers.mount(require('./index'), { });
    var targetEl = helpers.targetEl;
    var innerHTML = targetEl.innerHTML;
    expect(innerHTML).to.equal('<!--$marko--><div class="card"><div class="body"><span>1</span></div></div><div class="card"><div class="body"><span>2</span></div></div><div class="card"><div class="body"><span>3</span></div></div><div class="card"><div class="body"><span>4</span></div></div><!--$marko-->');
};
