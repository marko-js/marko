// tags/child.marko
const $template = "<div><!></div>";
const $setup = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag(0, 0, 0, 1);
const $input_content__OR__input_value = /* @__PURE__ */ _or(5, ($scope) => $dynamicTag($scope, $scope.d, () => [$scope.e]));
const $content = /* @__PURE__ */ _const(3, $input_content__OR__input_value);
const $value = /* @__PURE__ */ _const(4, $input_content__OR__input_value);

// template.marko
const $child_content2__outer = /* @__PURE__ */ _closure_get(2, ($scope) => _text($scope.a, $scope._.c));
const $child_content2__setup = $child_content2__outer;
const $child_content2__inner = ($scope, inner) => _text($scope.b, inner);
const $child_content2__$params = ($scope, $params3) => $child_content2__inner($scope, $params3[0]);
const $child_content2 = _content_resume("a0", "<div><!>.<!></div>", "D%c%l", $child_content2__setup, $child_content2__$params);
const $child_content__y = /* @__PURE__ */ _closure_get(3, ($scope) => $value($scope.a, $scope._.d));
const $child_content__setup = ($scope) => {
	$child_content__y($scope);
	/* @__PURE__ */ $setup($scope.a);
	$content($scope.a, $child_content2($scope));
};
const $child_content__$params = ($scope, $params2) => $child_content__outer($scope, $params2[0]);
const $child_content__outer = /* @__PURE__ */ _const(2, /* @__PURE__ */ _closure($child_content2__outer));
const $child_content = _content_resume("a1", $template, /* @__PURE__ */ ((_w0) => `/${_w0}&`)("D%l"), $child_content__setup, $child_content__$params);
const $x__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$x($scope, $scope.c + 1);
}));
const $x = /* @__PURE__ */ _let(2, ($scope) => {
	$value($scope.b, $scope.c);
	$x__script($scope);
});
