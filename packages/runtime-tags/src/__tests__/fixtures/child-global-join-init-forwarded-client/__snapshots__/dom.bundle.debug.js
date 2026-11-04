// tags/child.marko
const $template$2 = "<p> </p><!><button class=t>t</button>";
const $walks$2 = "D l%b b";
const $if_content__input_a__script = _script("__tests__/tags/child.marko_1_input_a#0:5", ($scope) => _el_read($scope["#div/0"]).textContent = "s:" + $scope._.input_a);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/1", 0, $if_content__input_a__script);
const $if_content__setup = $if_content__input_a;
const $if = /*@__PURE__*/ _if("#text/1", "<div></div>", " ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/8", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script$1 = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup$2($scope) {
	$open($scope, true);
	$setup__script$1($scope);
}
const $input_a__OR__input_b = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/0"], $scope.input_a + $scope.input_b));
const $input_a = /*@__PURE__*/ _const("input_a", ($scope) => {
	$input_a__OR__input_b($scope);
	$if_content__input_a($scope);
});
const $input_b$1 = /*@__PURE__*/ _const("input_b", $input_a__OR__input_b);
const $input$1 = ($scope, input) => {
	$input_a($scope, input.a);
	$input_b$1($scope, input.b);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$2, $walks$2, $setup$2, $input$1);

// tags/mid.marko
const $template$1 = $template$2;
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2);
function $setup$1($scope) {
	$setup$2($scope["#childScope/0"]);
	$input_a($scope["#childScope/0"], $scope.$global.x);
}
const $input_b = ($scope, input_b) => $input_b$1($scope["#childScope/0"], input_b);
const $input = ($scope, input) => $input_b($scope, input.b);
var mid_default = /*@__PURE__*/ _template("__tests__/tags/mid.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button class=n>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
const $n = /*@__PURE__*/ _let("n/2", ($scope) => $input_b($scope["#childScope/0"], $scope.n));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
