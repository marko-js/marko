// template.marko
const $Inner_content__walks = "D l";
const $Inner_content__template = "<p> </p>";
const $Inner_content__b = ($scope, b) => _text($scope.a, b);
const $Inner_content__value__OR__y = /*@__PURE__*/ _fill_signal("4 a4", /*@__PURE__*/ _or_resume("a1", 4, ($scope) => $Inner_content__b($scope, $scope._.e + $scope.d)), _closure_subscribers, 6, 0);
const $Inner_content__value = _closure_resume("a9", /*@__PURE__*/ _closure_get(6, $Inner_content__value__OR__y));
const $Inner_content__setup = $Inner_content__value;
const $Inner_content__y = /*@__PURE__*/ _const(3, $Inner_content__value__OR__y);
const $Outer_content__count = /*@__PURE__*/ _fill_let("a5", 5, ($scope) => $Inner_content__y($scope.a, $scope.f));
const $Outer_content__setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$Outer_content__count($scope, +$scope.f + 1);
}));
const $Outer_content__setup = ($scope) => {
	$scope.a._ = $scope;
	$Inner_content__setup($scope.a);
	$Outer_content__setup__script($scope);
	$Outer_content__count($scope, 0);
};
const $Outer_content__$params = ($scope, $params2) => $Outer_content__value($scope, $params2[0].value);
const $Outer_content__value = /*@__PURE__*/ _fill_const("a4", 4, /* @__PURE__ */ _closure($Inner_content__value));
const $Outer_content = _content$1("a2", /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>inc</button>`)($Inner_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Inner_content__walks), $Outer_content__setup, $Outer_content__$params);
