// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__a__OR__b = /*@__PURE__*/ _or_resume("__tests__/template.marko_1_a#2_b#3/init", 4, ($scope) => _text($scope["#text/0"], $scope.a + $scope.b));
const $if_content__a = _let("a/2", $if_content__a__OR__b);
const $if_content__input_a = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_a#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_a", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__a($scope, $scope._.input_a))));
const $if_content__b = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "b/3", $if_content__a__OR__b);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__setup__script($scope);
	$if_content__b($scope, 1);
};
const $if = /*@__PURE__*/ _if("#text/0", "<span> </span><button class=b>b</button>", "D l ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
