// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
const $input_a = ($scope, input_a) => $input_a$1($scope["#childScope/0"], input_a);
const $input_x = ($scope, input_x) => $input_x$1($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $input_y$1($scope["#childScope/0"], input_y);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/shape.marko
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<button> </button>`)($D_content__template, $D_content__template);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}& D l`)($D_content__walks, $D_content__walks);
const $if_content__f = /*@__PURE__*/ _closure_get("f/11", ($scope) => _text($scope["#text/0"], $scope._._.f()), ($scope) => $scope._._, "__tests__/tags/shape.marko_2_f#0:10/subscribe");
const $if_content__setup = $if_content__f;
const $D_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $n = /*@__PURE__*/ _let("n/9", ($scope) => _text($scope["#text/3"], $scope.n));
const $setup__script = _script("__tests__/tags/shape.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$scope["#childScope/1"]._ = $scope;
	$n($scope, 0);
	$setup__script($scope);
}
const $f2__closure = /*@__PURE__*/ _closure($if_content__f);
const $f2 = /*@__PURE__*/ _const("f", $f2__closure);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => $f2($scope, $f($scope)));
const $input_x = ($scope, input_x) => $D_content__on($scope["#childScope/0"], input_x);
const $input_y = ($scope, input_y) => $D_content__on($scope["#childScope/1"], input_y);
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
	$input_y($scope, input.y);
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_resumed["__tests__/tags/shape.marko_0/f"] = $f;
var shape_default = /*@__PURE__*/ _template("__tests__/tags/shape.marko", $template, $walks, $setup, $input);
