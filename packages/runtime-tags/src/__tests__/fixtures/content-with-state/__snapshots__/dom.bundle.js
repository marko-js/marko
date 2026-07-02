// tags/outer.marko
const $inner_content__setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	this.doThing();
}));

// template.marko
const $outer_content__count = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $count = /* @__PURE__ */ _let(2, /* @__PURE__ */ _closure($outer_content__count));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.c + 1);
}));
