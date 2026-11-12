// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Inner_content__b = /*@__PURE__*/ _const(5, /* @__PURE__ */ _global_or(6, ($scope) => _text($scope.a, $scope.f + $scope.$.suffix), /* @__PURE__ */ _global_closure("a1", /* @__PURE__ */ _global_key(8, "suffix"))));
const $Inner_content__value__OR__y = /*@__PURE__*/ _or(4, ($scope) => $Inner_content__b($scope, $scope._.f + $scope.d));
const $Inner_content__value = /*@__PURE__*/ _closure_get_patch("a2", 9, $Inner_content__value__OR__y);
const $Inner_content__setup = $Inner_content__value;
const $Inner_content__y = /*@__PURE__*/ _const(3, $Inner_content__value__OR__y);
const $Outer_content__count = /*@__PURE__*/ _fill_let("a5", 6, ($scope) => _text($scope.c, $scope.g));
const $Outer_content__setup__script = _script("a4", ($scope) => _on($scope.b, "click", function() {
	$Outer_content__count($scope, +$scope.g + 1);
}));
const $Outer_content__setup = ($scope) => {
	$scope.a._ = $scope;
	$Inner_content__setup($scope.a);
	$Inner_content__y($scope.a, 1);
	$Outer_content__setup__script($scope);
	$Outer_content__count($scope, 0);
};
const $Outer_content__$params = ($scope, $params2) => $Outer_content__value($scope, $params2[0].value);
const $Outer_content__value = /*@__PURE__*/ _const(5, /* @__PURE__ */ _closure($Inner_content__value));
const $Outer_content = _content$1("a3", /*@__PURE__*/ ((_w0) => `${_w0}<button> </button>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}& D l`)($Inner_content__walks), $Outer_content__setup, $Outer_content__$params);
