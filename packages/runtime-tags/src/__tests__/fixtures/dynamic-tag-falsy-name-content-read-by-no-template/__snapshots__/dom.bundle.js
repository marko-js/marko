// tags/a.marko
const $template = "<div>A <!></div>";
const $walks = "Db%l";
const $input_x = ($scope, input_x) => _text($scope.a, input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var a_default = /*@__PURE__*/ _template("b", $template, $walks, 0, $input);

// template.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0, /* @__PURE__ */ _content("a1", "Hello"));
const $show = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, $scope.c && a_default, () => ({
	x: 1,
	item: attrTag({})
})));
const $setup__script = _script("a2", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
