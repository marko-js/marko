// total: 7485 (min) 3427 (brotli)
// tags/child.marko: 0 (min) 1 (brotli)
const $template = "<div> </div>";
const $setup = () => {};
const $name = ($scope, name) => _text($scope.a, name);

// template.marko: 378 (min) 246 (brotli)
const $for_content2__outer__OR__inner = /* @__PURE__ */ _or(3, ($scope) => $name($scope.a, `${$scope._.c}.${$scope.c}`));
const $for_content2__outer = /* @__PURE__ */ _for_closure(0, $for_content2__outer__OR__inner);
const $for_content2__setup = ($scope) => {
	$for_content2__outer._($scope);
	/* @__PURE__ */ $setup($scope.a);
};
const $for_content2__inner = /* @__PURE__ */ _const(2, $for_content2__outer__OR__inner);
const $for_content2__$params = ($scope, $params3) => $for_content2__inner($scope, $params3[0]);
const $for_content__for = /* @__PURE__ */ _for_of(0, $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D l"), $for_content2__setup, $for_content2__$params);
const $for_content__items = /* @__PURE__ */ _for_closure(1, ($scope) => $for_content__for($scope, [$scope._.c]));
const $for_content__setup = $for_content__items;
const $for_content__$params = ($scope, $params2) => $for_content__outer($scope, $params2[0]);
const $for_content__outer = /* @__PURE__ */ _const(2, $for_content2__outer);
const $for = /* @__PURE__ */ _for_of(1, "<!><!><!>", "b%c", $for_content__setup, $for_content__$params);
const $items__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [...$scope.c, $scope.c?.length]);
}));
const $items = /* @__PURE__ */ _let(2, ($scope) => {
	$for($scope, [$scope.c]);
	$for_content__items($scope);
	$items__script($scope);
});
