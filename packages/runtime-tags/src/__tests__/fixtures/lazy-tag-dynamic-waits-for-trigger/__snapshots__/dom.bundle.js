// template.marko
const Child = /*@__PURE__*/ _load_template("a", /*@__PURE__*/ (/* @__PURE__ */ _load_event_trigger("click", "#go"))(($_) => import("./child.mjs").then((mod) => mod.default)));
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $show = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c ? Child : null));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));

// child.marko
const $template = "<button class=counter> </button>";
const $walks = " D l";
const $count = /*@__PURE__*/ _let(2, ($scope) => _text($scope.b, $scope.c));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("a", $template, $walks, $setup);
