// template.marko
const $E_content__walks = "b%c";
const $E_content__template = "<!><!><!>";
const $D_content__walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&D l`)($E_content__walks);
const $D_content__template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<p> </p>`)($E_content__template);
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}`)($D_content__template, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&`)($D_content__walks, $walks$1);
const $if_content__f = /*@__PURE__*/ _closure_get("f/8", ($scope) => _text($scope["#text/0"], $scope._._.f()), ($scope) => $scope._._, "__tests__/template.marko_3_f#0:6/subscribe");
const $if_content__setup = $if_content__f;
const $E_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $E_content__show = ($scope, show) => $E_content__if($scope, show ? 0 : 1);
const $E_content__$params = ($scope, $params2) => $E_content__$temp($scope, $params2[0]);
const $E_content__$temp = ($scope, $temp) => $E_content__show($scope, $temp.show);
const $D_content__input_a = /*@__PURE__*/ _closure_get("input_a/7", ($scope) => _text($scope["#text/1"], $scope._.input_a), 0, "__tests__/template.marko_1_input_a#0:4/subscribe");
const $D_content__setup = ($scope) => {
	$D_content__input_a($scope);
	$scope["#childScope/0"]._ = $scope._;
};
const $D_content__on = ($scope, on) => $E_content__show($scope["#childScope/0"], on);
const $D_content__$params = ($scope, $params3) => $D_content__$temp($scope, $params3[0]);
const $D_content__$temp = ($scope, $temp2) => $D_content__on($scope, $temp2.on);
const $f2__closure = /*@__PURE__*/ _closure($if_content__f);
const $f2 = /*@__PURE__*/ _const("f", $f2__closure);
const $input_a__closure = /*@__PURE__*/ _closure($D_content__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$f2($scope, $f($scope));
	$input_a__closure($scope);
});
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
