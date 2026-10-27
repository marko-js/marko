// tags/note.marko
const $template$1 = "<p> </p>";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);

// tags/toggle.marko
const $template = "<!><!><!>";
const $if = /*@__PURE__*/ _if(0, "<i>on</i>");
const $input_on = ($scope, input_on) => $if($scope, input_on ? 0 : 1);

// tags/card.marko
const $await_content2__w = ($scope, w) => _text($scope.a, w);
const $await_content2__$params = ($scope, $params3) => $await_content2__w($scope, $params3[0]);
const $catch_content__input_label = /*@__PURE__*/ _fill_join_closure("b16", 4, /*@__PURE__*/ _closure_get(8, ($scope) => $input_label($scope.a, $scope._.e), 0, "b11"), 1);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__input_other($scope);
	$await_content2($scope);
};
const $await_content2 = /*@__PURE__*/ _await_content(1, "<b> </b>", "D ");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(1, $await_content2__$params);
const $catch_content__input_other = /*@__PURE__*/ _fill_join_closure("b17", 6, /*@__PURE__*/ _closure_get(10, ($scope) => $catch_content__await_promise($scope, $scope._.g), 0, "b12"), 0);
const $catch_content = _content$1("b15", /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D l"), $catch_content__setup);
const $placeholder_content__input_label$1 = /*@__PURE__*/ _fill_join_closure("b16", 4, /*@__PURE__*/ _closure_get(8, ($scope) => $input_label($scope.a, $scope._.e), 0, "b0"), 0);
const $placeholder_content$1 = _content$1("b10", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l"), $placeholder_content__input_label$1);

// template.marko
const $placeholder_content__input_label__OR__n = /*@__PURE__*/ _fill_join_subscribers("a10", 6, /*@__PURE__*/ _or(3, ($scope) => $input_label($scope.b, `${$scope._.l} ${$scope._.g}`)), 12, 0);
const $placeholder_content__input_label = /*@__PURE__*/ _closure_get(12, $placeholder_content__input_label__OR__n, 0, "a0");
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__input_label($scope);
	$placeholder_content__brand($scope);
	$placeholder_content__n($scope);
};
const $placeholder_content__brand = /*@__PURE__*/ _fill_join_closure("a11", 10, /*@__PURE__*/ _closure_get(14, ($scope) => $input_label($scope.a, $scope._.k)), 0);
const $placeholder_content__n = /*@__PURE__*/ _closure_get(15, ($scope) => {
	$input_on($scope.c, $scope._.l);
	$placeholder_content__input_label__OR__n($scope);
}, 0, "a1");
const $placeholder_content = _content$1("a7", /*@__PURE__*/ ((_w0, _w1, _w2) => `${_w0}${_w1}${_w2}<!>`)($template$1, $template$1, $template), /*@__PURE__*/ ((_w0, _w1, _w2) => `/${_w0}&/${_w1}&/${_w2}&b`)("D l", "D l", "b%c"), $placeholder_content__setup);
const $n__closure = /*@__PURE__*/ _closure($placeholder_content__n);
const $n = /*@__PURE__*/ _let(11, ($scope) => {
	_text($scope.b, $scope.l);
	$n__closure($scope);
});
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.l + 1);
}));
