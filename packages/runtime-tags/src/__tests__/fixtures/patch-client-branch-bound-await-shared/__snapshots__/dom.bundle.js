// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content__input_tag__OR__Inner = /*@__PURE__*/ _or(2, ($scope) => $await_content__dynamicTag($scope, $scope._._._.f, ($_) => ({ content: $scope._.c })));
const $await_content__input_tag = /*@__PURE__*/ _closure_get_patch("a3", 8, $await_content__input_tag__OR__Inner, ($scope) => $scope._._._, "a9", 1);
const $await_content__setup = ($scope) => {
	$await_content__input_tag($scope);
	$await_content__Inner($scope);
};
const $await_content__Inner = /*@__PURE__*/ _closure_get(10, $await_content__input_tag__OR__Inner);
const $await_content__$params = ($scope, $params2) => _text($scope.b, $params2[0]);
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 7, ($scope) => _text($scope.b, $scope._._._.e), ($scope) => $scope._._._, "a8", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log("inner", $scope._._._.e);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("a0", "<b> </b>", " D ", $Inner_content__setup);
const $card_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content__input_tag__OR__Inner = /*@__PURE__*/ _or(3, ($scope) => $card_content__dynamicTag($scope, $scope._._.f, ($_) => ({ content: $scope.c })));
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a6", 8, $card_content__input_tag__OR__Inner, ($scope) => $scope._._, "a9", 0);
const $card_content__Inner = /*@__PURE__*/ _const(2, $card_content__input_tag__OR__Inner);
const $card_content__setup = ($scope) => {
	$card_content__input_tag($scope);
	$card_content__input_p($scope);
	$await_content($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $await_content = /*@__PURE__*/ _await_content(1, "<!><!><!>", "b%b%", $await_content__setup);
const $card_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content__$params);
const $card_content__input_p = /*@__PURE__*/ _closure_get_patch("a5", 9, ($scope) => $card_content__await_promise($scope, $scope._._.g), ($scope) => $scope._._, "a10", 0);
const $card_content = _content$1("a7", "<!><!><!><!>", "b%b%", $card_content__setup);
