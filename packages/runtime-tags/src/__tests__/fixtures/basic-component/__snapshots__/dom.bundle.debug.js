// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $clickCount = /*@__PURE__*/ _let("clickCount/2", ($scope) => _text($scope["#text/1"], $scope.clickCount));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$clickCount($scope, +$scope.clickCount + 1);
}));
function $setup($scope) {
	$clickCount($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
