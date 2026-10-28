// template.marko
const $template = "<main><!><button>Toggle</button></main>";
const $walks = "D%b l";
function check(fail) {
	if (fail) throw new Error("down");
}
const $catch_content = _content("__tests__/template.marko_3*content", "Unavailable");
const $try_content__input_label = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill0", "input_label", /*@__PURE__*/ _closure_get("input_label/7", ($scope) => _text($scope["#text/0"], $scope._._.input_label), ($scope) => $scope._._, "__tests__/template.marko_2_input_label#0:4/subscribe"), 0);
const $try_content__setup = ($scope) => {
	$try_content__input_label($scope);
	$try_content__input_fail($scope);
};
const $try_content__input_fail = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko_fill1", "input_fail", /*@__PURE__*/ _closure_get("input_fail/8", ($scope) => _text($scope["#text/1"], check($scope._._.input_fail)), ($scope) => $scope._._, "__tests__/template.marko_2_input_fail#0:5/subscribe"), 0);
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<p><!><!></p>", "D%b%", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $open = _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	$input_fail($scope, input.fail);
};
const $input_label__closure = /*@__PURE__*/ _closure($try_content__input_label);
const $input_label = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_label", $input_label__closure);
const $input_fail__closure = /*@__PURE__*/ _closure($try_content__input_fail);
const $input_fail = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill1", "input_fail", $input_fail__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
