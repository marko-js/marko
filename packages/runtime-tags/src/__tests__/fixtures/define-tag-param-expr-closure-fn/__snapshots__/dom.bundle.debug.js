// template.marko
const $D_content__walks = "D l";
const $D_content__template = "<span> </span>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($D_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($D_content__walks, $walks$1);
const $D_content__f__OR__on = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/0"], $scope.on && $scope._.f()));
const $D_content__f = /*@__PURE__*/ _closure_get("f/7", $D_content__f__OR__on, 0, "__tests__/template.marko_1_f#0:6/subscribe");
const $D_content__setup = $D_content__f;
const $D_content__on = /*@__PURE__*/ _const("on", $D_content__f__OR__on);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $f2__closure = /*@__PURE__*/ _closure($D_content__f);
const $f2 = /*@__PURE__*/ _const("f", $f2__closure);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => $f2($scope, $f($scope)));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$D_content__setup($scope["#childScope/0"]);
	$setup$1($scope["#childScope/1"]);
}
const $input_x = ($scope, input_x) => $D_content__on($scope["#childScope/0"], input_x);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_resumed["__tests__/template.marko_0/f"] = $f;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _let("n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
