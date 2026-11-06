// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => _text($scope.c, $scope._._._._.f), ($scope) => $scope._._._._, "a13", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.c);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__v($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content__v = /*@__PURE__*/ _closure_get_patch("a3", 10, ($scope) => _text($scope.b, $scope._.c), 0, "a4", 0);
const $Inner_content = _content$1("a0", "<b><!><!></b>", " D%b%", $Inner_content__setup);
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content__input_tag__OR__Inner = /*@__PURE__*/ _or_patch("a6", 4, ($scope) => $await_content__dynamicTag($scope, $scope._._._.g, ($_) => ({ content: $scope.d })));
const $await_content__input_tag = /*@__PURE__*/ _closure_get_patch("a5", 9, $await_content__input_tag__OR__Inner, ($scope) => $scope._._._, "a14", 0);
const $await_content__Inner = /*@__PURE__*/ _const(3, $await_content__input_tag__OR__Inner);
const $await_content__setup = ($scope) => {
	$await_content__input_tag($scope);
	$await_content__Inner($scope, { content: $Inner_content($scope) });
};
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v = /*@__PURE__*/ _const(2, /* @__PURE__ */ _closure($Inner_content__v));
const $await_content = /*@__PURE__*/ _await_content(0, "<!><!><!>", "b%", $await_content__setup);
const $card_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $card_content__input_p = /*@__PURE__*/ _closure_get_patch("a11", 7, ($scope) => $card_content__await_promise($scope, $scope._._.e), ($scope) => $scope._._, "a12", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_p($scope);
	$await_content($scope);
};
const $card_content = _content$1("a9", "<!><!><!>", "b%", $card_content__setup);
