// template.marko
const $for_content__show = /* @__PURE__ */ _show(2, 0);
const $for_content__compact = /* @__PURE__ */ _for_closure(1, ($scope) => $for_content__show($scope, !$scope._.c));
const $compact__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$compact($scope, !$scope.c);
}));
const $compact = /* @__PURE__ */ _let(2, ($scope) => {
	$for_content__compact($scope);
	$compact__script($scope);
});
