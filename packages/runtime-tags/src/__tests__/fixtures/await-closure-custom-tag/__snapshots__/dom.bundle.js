// tags/child.marko
const $input_on$1 = ($scope, input_on) => _text($scope.c, input_on);
const $setup__script$1 = _script("b0", ($scope) => $scope.a);

// tags/parent.marko
const $placeholder_content = _content_resume("c2", "loading...");
const $await_content__on = /*@__PURE__*/ _closure_get(11, ($scope) => $input_on$1($scope.a, $scope._._.i), ($scope) => $scope._._, "c1");
const $on$1 = /*@__PURE__*/ _let_change(8, /* @__PURE__ */ _closure($await_content__on));
const $input_on__OR__input_onChange = /*@__PURE__*/ _or(5, ($scope) => $on$1($scope, $scope.d, $scope.e));
const $input_on = /*@__PURE__*/ _const(3, $input_on__OR__input_onChange);

// template.marko
const $on = /*@__PURE__*/ _let(5, ($scope) => $input_on($scope.b, $scope.f));
const $setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	$on($scope, !$scope.f);
}));
const $onChange = ($scope) => (_new_on) => {
	$on($scope, _new_on);
};
_resumed.a0 = $onChange;
