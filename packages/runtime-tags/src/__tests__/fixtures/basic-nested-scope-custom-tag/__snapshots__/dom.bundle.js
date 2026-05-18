// total: 2983 (min) 1528 (brotli)
// template.marko: 140 (min) 113 (brotli)
const $child_content__count__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope._, $scope._.b + 1);
}));
const $child_content__count = /* @__PURE__ */ _closure_get(1, ($scope) => {
	_text($scope.b, $scope._.b);
	$child_content__count__script($scope);
});
const $count__closure = /* @__PURE__ */ _closure($child_content__count);
const $count = /* @__PURE__ */ _let(1, $count__closure);
