// template.marko
const Child = /*@__PURE__*/ _load_template("a", () => import("./child.mjs").then((mod) => mod.default));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $show = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? Child : null, () => ({ value: 1 })));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));

// child.marko
const $template = "<span class=child>c</span>";
const $walks = "b";
var child_default = /*@__PURE__*/ _template("a", $template, "b");
