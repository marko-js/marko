// template.marko
const $template = "<!><!><p><!> <!></p><button></button>";
const $walks = "0&b1bD%c%l b";
_dynamic_tag_var_resume("#text/2");
const $Count_content__n = /*@__PURE__*/ _let("n/0", ($scope) => _return($scope, { n: $scope.n }));
const $Count_content__setup = /*@__PURE__*/ _child_setup(($scope) => $Count_content__n($scope, 1));
const $Count_content = _content("__tests__/template.marko_1*content", 0, 0, /*@__PURE__*/ _return_setup($Count_content__setup));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", 0, () => $b);
const $Count__OR__on = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag($scope, $scope.on && $scope.Count));
const $Count = /*@__PURE__*/ _const("Count", $Count__OR__on);
const $on = /*@__PURE__*/ _let("on/8", $Count__OR__on);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/6"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $a);
	$Count_content__setup._($scope["#childScope/0"], $scope);
	$Count($scope, { content: $Count_content($scope) });
	$on($scope, true);
	$setup__script($scope);
}
const $a = ($scope, a) => _text($scope["#text/4"], String(a && a.n));
const $b = _var_resume("__tests__/template.marko_0_b#11/var", ($scope, b) => _text($scope["#text/5"], String(b && b.n)));
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
