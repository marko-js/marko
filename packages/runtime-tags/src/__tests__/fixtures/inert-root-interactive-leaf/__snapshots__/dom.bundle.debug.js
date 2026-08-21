// layout.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<main><h1>static heading</h1>${_w0}</main>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `Db/${_w0}&l`)($walks$2);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
}
var layout_default = /*@__PURE__*/ _template("__tests__/layout.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// counter.marko
const $template = "<button class=counter>count:<!></button>";
const $walks = " Db%l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/counter.marko", $template, $walks, $setup);
