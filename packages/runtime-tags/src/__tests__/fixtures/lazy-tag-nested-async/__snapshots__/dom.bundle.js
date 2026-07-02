// child.marko
let $load_GrandChild_tag_input_value = /* @__PURE__ */ _load_signal(() => import("./v:grand-child.marko.input_value.mjs"));
const $await_content__count = /* @__PURE__ */ _closure_get(6, ($scope) => $load_GrandChild_tag_input_value($scope.c, $scope._.g));
const $count__closure = /* @__PURE__ */ _closure($await_content__count);
const $count = /* @__PURE__ */ _let(6, ($scope) => {
	_text($scope.b, $scope.g);
	$count__closure($scope);
});
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.g + 1);
}));

// grand-child.marko
const $n = /* @__PURE__ */ _let(7, ($scope) => _text($scope.b, $scope.h));
const $input_value = ($scope, input_value) => {
	_text($scope.c, input_value);
	$n($scope, input_value);
};
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, $scope.h + 1);
}));
