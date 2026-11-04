// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $input_content = $c;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
const $setup = $setup__script;

// template.marko
const $card_content3__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content3__input_tag__OR__A = /*@__PURE__*/ _or(1, ($scope) => $card_content3__dynamicTag($scope, $scope._._._.f, ($_) => ({ content: $scope._.c })));
const $card_content3__input_tag = /*@__PURE__*/ _closure_get_patch("a4", 7, $card_content3__input_tag__OR__A, ($scope) => $scope._._._, "a9", 1);
const $card_content3__setup = ($scope) => {
	$card_content3__input_tag($scope);
	$card_content3__A($scope);
};
const $card_content3__A = /*@__PURE__*/ _closure_get(8, $card_content3__input_tag__OR__A);
const $card_content3 = _content$1("a5", "<!><!><!>", "b%", $card_content3__setup);
const $card_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $card_content2__input_tag__OR__A = /*@__PURE__*/ _or(1, ($scope) => $card_content2__dynamicTag($scope, $scope._._._.f, ($_) => ({ content: $scope._.c })));
const $card_content2__input_tag = /*@__PURE__*/ _closure_get_patch("a2", 7, $card_content2__input_tag__OR__A, ($scope) => $scope._._._, "a9", 0);
const $card_content2__setup = ($scope) => {
	$card_content2__input_tag($scope);
	$card_content2__A($scope);
};
const $card_content2__A = /*@__PURE__*/ _closure_get(8, $card_content2__input_tag__OR__A);
const $card_content2 = _content$1("a3", "<!><!><!>", "b%", $card_content2__setup);
const $A_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 6, ($scope) => _text($scope.a, $scope._._._.e), ($scope) => $scope._._._, "a8", 0);
const $A_content = _content$1("a0", "<b> </b>", "D ", $A_content__input_label);
const $card_content__A = /*@__PURE__*/ _const(2);
const $card_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $card_content2($scope));
	$setup($scope.b);
	$input_content($scope.b, $card_content3($scope));
	$card_content__A($scope, { content: $A_content($scope) });
};
const $card_content = _content$1("a6", /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}`)($template, $template), /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&`)($walks, $walks), $card_content__setup);
