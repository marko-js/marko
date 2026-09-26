// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<div> </div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_html($scope, counter_default.render({ $global: { renderId: "_2" } }).toString(), "#text/1");
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let("count/2", ($scope) => _text($scope["#text/1"], $scope.count));
const $setup__script = _script("__tests__/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template, $walks, $setup);
