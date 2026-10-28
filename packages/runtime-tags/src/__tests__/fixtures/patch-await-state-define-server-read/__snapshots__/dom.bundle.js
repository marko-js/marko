// template.marko
const $Row_content__walks = "D%c%l";
const $Row_content__template = "<em><!>:<!></em>";
const $await_content__setup = ($scope) => {
	$scope.a._ = $scope._;
	$Row_content__setup($scope.a);
};
const $await_content__x = ($scope, x) => $Row_content__r_v($scope.a, x);
const $await_content__$params = ($scope, $params3) => $await_content__x($scope, $params3[0]);
const $Row_content__input_label = /*@__PURE__*/ _fill_join_closure("a3", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._.e), 0, "a1"), 0);
const $Row_content__setup = $Row_content__input_label;
const $Row_content__r_v = ($scope, r_v) => _text($scope.b, r_v);
const $await_content = _resumed.a5 = /*@__PURE__*/ _await_content(1, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Row_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Row_content__walks), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $n = /*@__PURE__*/ _let(5, ($scope) => $await_promise($scope, Promise.resolve($scope.f)));
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.f + 1);
}));
