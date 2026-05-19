// total: 13791 (min) 5330 (brotli)
// tags/custom-tag.marko: 0 (min) 1 (brotli)
const $template = "<div>Child: <!></div>";
const $walks = "Db%l";
const $setup = () => {};
const $input = /* @__PURE__ */ _const(2, ($scope) => {
	_text($scope.a, $scope.c);
	_return($scope, $scope.c);
});
var custom_tag_default = /* @__PURE__ */ _template("b", $template, $walks, $setup, $input);

// template.marko: 211 (min) 159 (brotli)
const tags = [custom_tag_default];
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(2, 0, () => $y, 1);
const $x__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.f + 1);
}));
const $x = /* @__PURE__ */ _let(5, ($scope) => {
	_text($scope.b, $scope.f);
	$dynamicTag($scope, tags[0], () => [$scope.f]);
	$x__script($scope);
});
const $y = _var_resume("a0", ($scope, y) => _text($scope.e, y));
