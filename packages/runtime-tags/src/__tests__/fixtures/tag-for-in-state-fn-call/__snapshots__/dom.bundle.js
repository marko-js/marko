// tags/card.marko
const $if_content__s__OR__fmt__OR__v = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.i($scope._.e + $scope._._.h)), 2);
const $if_content__s = /*@__PURE__*/ _closure_get(10, $if_content__s__OR__fmt__OR__v, ($scope) => $scope._._, "b1");
const $if_content__fmt = /*@__PURE__*/ _closure_get(11, $if_content__s__OR__fmt__OR__v, ($scope) => $scope._._, "b2");
const $s = /*@__PURE__*/ _let(7, /* @__PURE__ */ _closure($if_content__s));
const $setup__script$1 = _script("b3", ($scope) => _on($scope.b, "click", function() {
	$s($scope, +$scope.h + 1);
}));
const $fmt2 = /*@__PURE__*/ _const(8, /* @__PURE__ */ _closure($if_content__fmt));
const $input_prefix = /*@__PURE__*/ _const(4, ($scope) => $fmt2($scope, $fmt($scope)));
const $fmt = ($scope) => (v) => $scope.e + v;
_resumed.b0 = $fmt;

// template.marko
const $input_dyn__OR__input_prefix__OR__pre = /*@__PURE__*/ _or(9, ($scope) => $input_prefix($scope.a, $scope.g ? $scope.i : $scope.h), 2);
const $pre = /*@__PURE__*/ _let(8, $input_dyn__OR__input_prefix__OR__pre);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$pre($scope, $scope.i + "!");
}));
