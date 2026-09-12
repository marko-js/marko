// tags/box.marko
const $value = /*@__PURE__*/ _fill_let("c0", 0, ($scope) => _return($scope, $scope.a));
const $valueChange = ($scope) => function(next) {
	$value($scope, next);
};
_resume("c0", $valueChange);

// tags/counter.marko
const $template$1 = "<button class=tick> </button>";
const $walks$1 = " D l";
const $input_base__OR__tick = /*@__PURE__*/ _fill_join("d1", 5, /*@__PURE__*/ _fill_join("d0", 4, /*@__PURE__*/ _or(6, ($scope) => _text($scope.b, $scope.e + $scope.f))));
const $tick = /*@__PURE__*/ _fill_let("d1", 5, $input_base__OR__tick);
const $setup__script$1 = _script("d0", ($scope) => _on($scope.a, "click", function() {
	$tick($scope, +$scope.f + 1);
}));
function $setup($scope) {
	$tick($scope, 0);
	$setup__script$1($scope);
}
const $input_base = /*@__PURE__*/ _fill_const("d0", 4, $input_base__OR__tick);

// tags/panel.marko
const $template = "<section><h2>Panel</h2><div class=aside><!></div></section>";
const $walks = "DbD%m";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_aside = $dynamicTag;

// page.marko
const $aside_content__bonus__OR__p_base__OR__item_n = /*@__PURE__*/ _fill_join_subscribers("a2", 3, /*@__PURE__*/ _fill_join_subscribers("a1", 9, /*@__PURE__*/ _or(1, ($scope) => $input_base($scope.a, ($scope._._.h ?? $scope._._.j) + $scope._.d), 2), () => $aside_content__p_base, 0), () => $aside_content__item_n, 0);
const $aside_content__bonus = /*@__PURE__*/ _init_closure_get("a8", 11, $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._);
const $aside_content__setup = ($scope) => {
	$aside_content__bonus($scope);
	$aside_content__p_base($scope);
	$aside_content__item_n($scope);
	$setup($scope.a);
};
const $aside_content__p_base = /*@__PURE__*/ _fill_join_closure("a1", 9, /*@__PURE__*/ _init_closure_get("a9", 12, $aside_content__bonus__OR__p_base__OR__item_n, ($scope) => $scope._._), 0);
const $aside_content__item_n = /*@__PURE__*/ _fill_join_closure("a2", 3, /*@__PURE__*/ _init_closure_get("a10", 4, $aside_content__bonus__OR__p_base__OR__item_n), 0);
const $aside_content = /*@__PURE__*/ _content$1("a0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $aside_content__setup);
const $for_content__setup = ($scope) => $input_aside($scope.a, attrTag({ content: $aside_content($scope) }));
const $for_content__$params = ($scope, $params2) => $for_content__item_n($scope, $params2[0]?.n);
const $for_content__item_n = /*@__PURE__*/ _fill_const("a2", 3, /* @__PURE__ */ _closure($aside_content__item_n));
const $bonus = _var_resume("a2", /*@__PURE__*/ _const(7, /* @__PURE__ */ _closure($aside_content__bonus)));
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	_var_change($scope.a, 5);
}));
const $for = /*@__PURE__*/ _for_of(3, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $for_content__setup, $for_content__$params);
const $input_items = _fill_const("a0", 6, ($scope) => $for($scope, [$scope.g]));
