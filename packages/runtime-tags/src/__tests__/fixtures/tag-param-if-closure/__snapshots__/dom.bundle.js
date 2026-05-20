// total: 13476 (min) 5217 (brotli)
// template.marko: 313 (min) 215 (brotli)
const $Foo_content2__dynamicTag = /* @__PURE__ */ _dynamic_tag(0, 0, 0, 1);
const $Foo_content2__input_content__OR__input_value = /* @__PURE__ */ _or(5, ($scope) => $Foo_content2__dynamicTag($scope, $scope.d, () => [$scope.e]));
const $Foo_content2__input_value = /* @__PURE__ */ _const(4, $Foo_content2__input_content__OR__input_value);
const $Foo_content__if = /* @__PURE__ */ _if(0, " ", " b", /* @__PURE__ */ _closure_get(3, ($scope) => _text($scope.a, $scope._._.d), ($scope) => $scope._._));
const $Foo_content__v = ($scope, v) => $Foo_content__if($scope, v ? 0 : 1);
const $Foo_content__$params = ($scope, $params3) => $Foo_content__v($scope, $params3[0]);
const $Foo_content = _content_resume("a1", "<!><!><!>", "b%c", 0, $Foo_content__$params);
const $count__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$count($scope, $scope.c + 1);
}));
const $count = /* @__PURE__ */ _let(2, ($scope) => {
	$Foo_content2__input_value($scope.b, $scope.c);
	$count__script($scope);
});
