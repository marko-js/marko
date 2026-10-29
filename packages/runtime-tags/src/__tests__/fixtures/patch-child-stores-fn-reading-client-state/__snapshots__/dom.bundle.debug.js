// tags/card.marko
const $template$1 = "";
const $walks$1 = "";
const $g2__script = _script("__tests__/tags/card.marko_0_g#5", ($scope) => console.log("run", $scope.g()));
const $g2 = /*@__PURE__*/ _const("g", $g2__script);
const $input_fn__OR__open = /*@__PURE__*/ _or_resume("__tests__/tags/card.marko_0_input_fn#2_open#3/init", 4, ($scope) => $g2($scope, $scope.open ? $scope.input_fn : $g));
const $open = _let("open/3", $input_fn__OR__open);
function $setup$1($scope) {
	$open($scope, true);
}
const $input_fn = /*@__PURE__*/ _const("input_fn", $input_fn__OR__open);
const $input$1 = ($scope, input) => $input_fn($scope, input.fn);
function $g() {
	return "-";
}
_resumed["__tests__/tags/card.marko_0/g"] = $g;
var card_default = /*@__PURE__*/ _template("__tests__/tags/card.marko", "", "", $setup$1, $input$1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>more</button><span> </span>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& bD l`)("");
const $input_label__OR__n = /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _or(8, ($scope) => $input_fn($scope["#childScope/0"], $fn($scope))));
const $n = _let("n/7", $input_label__OR__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
const $input_label = /*@__PURE__*/ _const("input_label", $input_label__OR__n);
const $input_x = ($scope, input_x) => _text($scope["#text/2"], input_x);
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_x($scope, input.x);
};
const $fn = ($scope) => function() {
	return "f:" + $scope.input_label + $scope.n;
};
_resumed["__tests__/template.marko_0/fn"] = $fn;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
