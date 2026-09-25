// tags/child.marko
const $template$1 = "<button>pick</button>";
const $walks$1 = " b";
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$scope.input_onPick();
}));
const $setup$1 = $setup__script;
const $input = ($scope, input) => $input_onPick($scope, input.onPick);
const $input_onPick = /*@__PURE__*/ _const("input_onPick");
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, " b", $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)(" b");
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $inc2 = /*@__PURE__*/ _const("inc");
const $twice2 = ($scope, twice) => $input_onPick($scope["#childScope/0"], twice);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
	$inc2($scope, $inc($scope));
	$twice2($scope, $twice($scope));
}
const $inc = ($scope) => function() {
	$n($scope, +$scope.n + 1);
};
const $twice = ($scope) => function() {
	($scope.inc ||= $inc($scope))();
	($scope.inc ||= $inc($scope))();
};
_resumed["__tests__/template.marko_0/twice"] = $twice;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
