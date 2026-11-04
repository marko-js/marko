// tags/btn.marko
const $template$1 = "<i><!><!></i>";
const $walks = " D%b%l";
const $n = /*@__PURE__*/ _fill_let("b1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script$1 = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.g + 1);
}));
function $setup$1($scope) {
	$setup__script$1($scope);
	$n($scope, 0);
}
const $input_label$1 = ($scope, input_label) => _text($scope.b, input_label);

// tags/defn.marko
const $template = "<!><!><!>";
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("d2", 7, ($scope) => _text($scope.b, $scope._.d), 0, "d3", 0);
const $Inner_content__setup__script = _script("d1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._.d);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("d0", "<b> </b>", " D ", $Inner_content__setup);
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(0);
const $input_tag__OR__Inner = /*@__PURE__*/ _or_patch("d4", 6, ($scope) => $dynamicTag$1($scope, $scope.e, ($_) => ({ content: $scope.f })));
const $Inner = /*@__PURE__*/ _const(5, $input_tag__OR__Inner);
function $setup($scope) {
	$Inner($scope, { content: $Inner_content($scope) });
}
const $input_tag = /*@__PURE__*/ _const(4, $input_tag__OR__Inner);
const $input_label__closure = /*@__PURE__*/ _closure($Inner_content__input_label);
const $input_label = /*@__PURE__*/ _const(3, $input_label__closure);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("c0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $card_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 6, ($scope) => {
	$input_label$1($scope.a, $scope._._.e);
	$input_label($scope.b, $scope._._.e);
}, ($scope) => $scope._._, "a4", 0);
const $card_content__setup = ($scope) => {
	$card_content__input_label($scope);
	$card_content__input_tag($scope);
	$setup$1($scope.a);
	$setup($scope.b);
};
const $card_content__input_tag = /*@__PURE__*/ _closure_get_patch("a1", 7, ($scope) => $input_tag($scope.b, $scope._._.f), ($scope) => $scope._._, "a5", 0);
const $card_content = _content$1("a2", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$1, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks, "b%c"), $card_content__setup);
