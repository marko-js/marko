// tags/card.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content = $dynamicTag;

// template.marko
const $catch_content = _content("a3", "error");
const $try_content__field = /*@__PURE__*/ _closure_get(8, ($scope) => $input_content($scope.a, $scope._.c), 0, "a2");
const $for_content__setup = /* @__PURE__ */ _try(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $try_content__field, 0, $catch_content);
const $for_content__$params = ($scope, $params2) => $for_content__field($scope, $params2[0]);
const $for_content__field = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($try_content__field));
const $for = /*@__PURE__*/ _for_of_unkeyed(1, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $rows = /*@__PURE__*/ _let(6, ($scope) => $for($scope, [$scope.g]));
const $setup__script = _script("a4", ($scope) => _on($scope.a, "click", function() {
	$rows($scope, []);
}));
