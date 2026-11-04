// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input__OR__i = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input#0:3_i#2/setup", 3, ($scope) => _text($scope["#text/0"], $scope._.input.format($scope.i)));
const $for_content__input = /*@__PURE__*/ _for_closure_patch("__tests__/template.marko_1_input#0:3/setup", "#text/0", $for_content__input__OR__i, 5);
const $for_content__setup = $for_content__input;
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__input__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<li> </li>", "D ", $for_content__setup, $for_content__$params);
const $l = _let("l/4", ($scope) => $for($scope, [$scope.l]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$l($scope, [...$scope.l, "b"]);
}));
function $setup($scope) {
	$l($scope, ["a"]);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _const("input", $for_content__input);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
