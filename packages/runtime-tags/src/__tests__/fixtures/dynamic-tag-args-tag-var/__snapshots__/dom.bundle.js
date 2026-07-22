// tags/custom-tag.marko
const $template = "<div>Child: <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $input__render = /*@__PURE__*/ _render(($scope) => _text($scope.a, $scope.c));
const $input = /*@__PURE__*/ _const(2, ($scope) => {
	$input__render($scope);
	_return($scope, $scope.c);
});
var custom_tag_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
const tags = [custom_tag_default];
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(2, 0, () => $y, 1);
const $x__render = /*@__PURE__*/ _render(($scope) => _text($scope.b, $scope.f));
const $x = /*@__PURE__*/ _let(5, ($scope) => {
	$x__render($scope);
	$dynamicTag($scope, tags[0], () => [$scope.f]);
});
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.f + 1);
}));
const $y = _var_resume("a0", /*@__PURE__*/ _render(($scope, y) => _text($scope.e, y)));
