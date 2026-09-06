// tags/kid.marko
const $template$1 = "<div> </div><!><button>t</button>";
const $walks$1 = "D l%b b";
const $if_content__input_b = /*@__PURE__*/ _fill_join("__tests__/tags/kid.marko0", "input_b", /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.input_b)));
const $if_content__setup$1 = $if_content__input_b;
const $if$1 = /*@__PURE__*/ _if("#text/1", "<p> </p>", "D ", $if_content__setup$1);
const $on = /*@__PURE__*/ _fill_let("__tests__/tags/kid.marko1", "on/7", ($scope) => $if$1($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/tags/kid.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup$1($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $input_a$1 = ($scope, input_a) => _text($scope["#text/0"], input_a);
const $input$1 = ($scope, input) => {
	$input_a$1($scope, input.a);
	$input_b($scope, input.b);
};
const $input_b = /*@__PURE__*/ _fill_const("__tests__/tags/kid.marko0", "input_b", $if_content__input_b);
var kid_default = /*@__PURE__*/ _template("__tests__/tags/kid.marko", $template$1, $walks$1, $setup$1, $input$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_a$1($scope["#childScope/0"], $scope._.input_a));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$setup$1($scope["#childScope/0"]);
	$input_b($scope["#childScope/0"], "const");
};
const $if = /*@__PURE__*/ _if("#text/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
