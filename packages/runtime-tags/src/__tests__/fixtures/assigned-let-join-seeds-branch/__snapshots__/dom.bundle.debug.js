// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content2__input_a = /*@__PURE__*/ _closure_get("input_a/6", ($scope) => _text($scope["#text/0"], $scope._._.input_a), ($scope) => $scope._._, "__tests__/template.marko_2_input_a#0:4/subscribe");
const $if_content2__setup = $if_content2__input_a;
const $if_content__input_b__OR__x = /*@__PURE__*/ _or(4, ($scope) => _text($scope["#text/2"], $scope.x + $scope._.input_b));
const $if_content__input_b = /*@__PURE__*/ _if_closure("#text/0", 0, $if_content__input_b__OR__x);
const $if_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content2__setup);
const $if_content__y = /*@__PURE__*/ _let("y/5", ($scope) => $if_content__if($scope, $scope.y ? 0 : 1));
const $if_content__x = /*@__PURE__*/ _let("x/3", ($scope) => {
	$if_content__y($scope, $scope.x);
	$if_content__input_b__OR__x($scope);
});
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__x($scope, 2);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_b._($scope);
	$if_content__x($scope, 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><button> </button>", "b%b D ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_a($scope, input.a);
	$input_b($scope, input.b);
};
const $input_a__closure = /*@__PURE__*/ _closure($if_content2__input_a);
const $input_a = /*@__PURE__*/ _const("input_a", $input_a__closure);
const $input_b = /*@__PURE__*/ _const("input_b", $if_content__input_b);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
