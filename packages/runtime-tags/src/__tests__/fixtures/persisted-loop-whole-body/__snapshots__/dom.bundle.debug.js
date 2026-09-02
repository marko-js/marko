// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $for_content__input__OR__i = /*@__PURE__*/ _fill_join_for("__tests__/template.marko0", "input", /*@__PURE__*/ _or(3, ($scope) => _text($scope["#text/0"], $scope._.input.format($scope.i))), "#text/0");
const $for_content__input = /*@__PURE__*/ _for_closure("#text/0", $for_content__input__OR__i);
const $for_content__setup = $for_content__input;
const $for_content__i = /*@__PURE__*/ _const("i", $for_content__input__OR__i);
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of("#text/0", "<li> </li>", "D ", $for_content__setup, $for_content__$params);
const $l = /*@__PURE__*/ _let("l/4", ($scope) => $for($scope, [$scope.l]));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$l($scope, [...$scope.l, "b"]);
}));
function $setup($scope) {
	$l($scope, ["a"]);
	$setup__script($scope);
}
const $input = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input", $for_content__input);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
