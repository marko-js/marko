// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__a__OR__b = /*@__PURE__*/ _or(1, ($scope) => _text($scope["#text/0"], $scope._.a + $scope._.b));
const $if_content2__a = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__a__OR__b);
const $if_content2__setup = ($scope) => {
	$if_content2__a._($scope);
	$if_content2__b._($scope);
};
const $if_content2__b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content2__a__OR__b);
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $if_content__input_a = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.input_a !== "z" ? 0 : 1));
const $if_content__a = /*@__PURE__*/ _let("a/2");
const $if_content__b = /*@__PURE__*/ _let("b/3", $if_content2__b);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_a._($scope);
	$if_content__a($scope, 1);
	$if_content__b($scope, 2);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><button class=b>b</button>", "b%b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
};
const $input_a = /*@__PURE__*/ _const("input_a", $if_content__input_a);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
