// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1);
const $if_content__f = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_f#0:6/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "f", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.f()))));
const $if_content__setup = $if_content__f;
const $f2 = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "f", $if_content__f);
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => $f2($scope, $f($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $input_x = ($scope, input_x) => $if($scope, input_x ? 0 : 1);
function $setup($scope) {
	$setup$1($scope["#childScope/1"]);
}
const $input = ($scope, input) => {
	$input_a($scope, input.a);
	$input_x($scope, input.x);
};
const $f = ($scope) => function() {
	return $scope.input_a;
};
_bind_resume("__tests__/template.marko_0/f input_a", $f);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/counter.marko
const $template = "<button class=inc> </button>";
const $walks = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template, $walks, $setup);
