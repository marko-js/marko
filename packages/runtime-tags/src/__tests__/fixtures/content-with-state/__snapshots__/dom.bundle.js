// total: 3042 (min) 1556 (brotli)
// tags/outer.marko: 61 (min) 65 (brotli)
const $inner_content__setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	this.doThing();
}));

// template.marko: 142 (min) 116 (brotli)
const $outer_content__count = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $count__closure = /* @__PURE__ */ _closure($outer_content__count);
const $count__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$count__closure($scope);
	$count__script($scope);
});
