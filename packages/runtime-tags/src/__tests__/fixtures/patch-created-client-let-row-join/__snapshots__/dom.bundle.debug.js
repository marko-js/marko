// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $for_content__b__OR__i = /*@__PURE__*/ _or_resume("__tests__/template.marko_2_b#1:2_i#2/init", 3, ($scope) => _text($scope["#text/0"], $scope._.b + $scope.i));
const $for_content__b = /*@__PURE__*/ _for_closure("#text/0", $for_content__b__OR__i);
const $for_content__setup = $for_content__b;
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__b__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $if_content__b = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "b/2", $for_content__b);
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<span> </span>", "D ", $for_content__setup, $for_content__$params);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/1"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__b($scope, 1);
	$if_content__setup__script($scope);
	$if_content__for($scope, [[1, 2]]);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><button class=b>b</button>", "b%b ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
