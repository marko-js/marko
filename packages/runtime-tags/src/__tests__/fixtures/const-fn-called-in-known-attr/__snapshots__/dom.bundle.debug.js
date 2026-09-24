// tags/child.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = () => {};
const $input_name = ($scope, input_name) => {
	_attr_class($scope["#button/0"], input_name);
	_text($scope["#text/1"], input_name);
};
const $input_onPick__script = _script("__tests__/tags/child.marko_0_input_onPick#5", ($scope) => _on($scope["#button/0"], "click", $scope.input_onPick));
const $input_onPick = /*@__PURE__*/ _const("input_onPick", $input_onPick__script);
const $input = ($scope, input) => {
	$input_name($scope, input.name);
	$input_onPick($scope, input.onPick);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<button id=raise>raise</button><p> </p>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}& bD l`)($walks$1, $walks$1);
const $pick__OR__canPick = /*@__PURE__*/ _or(9, ($scope) => $input_onPick($scope["#childScope/0"], $scope.canPick() ? $scope.pick : undefined));
const $pick2 = /*@__PURE__*/ _const("pick", $pick__OR__canPick);
const $getHandler2 = ($scope, getHandler) => $input_onPick($scope["#childScope/1"], getHandler());
const $inc2 = /*@__PURE__*/ _const("inc", ($scope) => $getHandler2($scope, $getHandler($scope)));
const $canPick2 = /*@__PURE__*/ _const("canPick", $pick__OR__canPick);
const $count__OR__max = /*@__PURE__*/ _or(6, ($scope) => $canPick2($scope, $canPick($scope)));
const $count = /*@__PURE__*/ _let("count/4", ($scope) => {
	_text($scope["#text/3"], $scope.count);
	$pick2($scope, $pick($scope));
	$inc2($scope, $inc($scope));
	$count__OR__max($scope);
});
const $max = /*@__PURE__*/ _let("max/5", $count__OR__max);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$max($scope, $scope.max + 100);
}));
function $setup($scope) {
	$input_name($scope["#childScope/0"], "gated");
	$input_name($scope["#childScope/1"], "returned");
	$count($scope, 0);
	$max($scope, 1);
	$setup__script($scope);
}
const $pick = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
const $getHandler = ($scope) => function() {
	return $scope.inc;
};
const $inc = ($scope) => function() {
	$count($scope, $scope.count + 10);
};
const $canPick = ($scope) => function() {
	return $scope.count < $scope.max;
};
_resumed["__tests__/template.marko_0/pick"] = $pick;
_resumed["__tests__/template.marko_0/getHandler"] = $getHandler;
_resumed["__tests__/template.marko_0/inc"] = $inc;
_resumed["__tests__/template.marko_0/canPick"] = $canPick;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
