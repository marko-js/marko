// tags/counter/index.marko
const $template$1 = "<button class=c> </button>";
const $walks$1 = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter/index.marko0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script$1 = _script("__tests__/tags/counter/index.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, $scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script$1($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button class=t>t</button></main>";
const $walks = "D%b l";
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
