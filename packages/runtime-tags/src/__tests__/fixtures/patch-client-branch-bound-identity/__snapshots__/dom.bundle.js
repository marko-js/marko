// tags/cmp.marko
const $template = "<p><!> <!></p><!><!><!>";
const $walks = "D%c%l%b%c";
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(2);
const $x__OR__y = /*@__PURE__*/ _or(13, ($scope) => _text($scope.a, $scope.l === $scope.m ? "same" : "diff"));
const $x = _fill_let("c1", 11, ($scope) => {
	$dynamicTag$1($scope, $scope.l);
	$x__OR__y($scope);
});
const $input_a = $x;
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(3);
const $y = _fill_let("c2", 12, ($scope) => {
	$dynamicTag2($scope, $scope.m);
	$x__OR__y($scope);
});
const $input_b = $y;
const $input_o__OR__input_p = /*@__PURE__*/ _or_patch("c0", 10, ($scope) => _text($scope.b, $scope.i === $scope.j ? "same" : "diff"));
const $input_o = /*@__PURE__*/ _const(8, $input_o__OR__input_p);
const $input_p = /*@__PURE__*/ _const(9, $input_o__OR__input_p);

// tags/card.marko
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $c = _let(5, ($scope) => $dynamicTag($scope, $scope.f));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));

// template.marko
const $Inner_content__input_label = /*@__PURE__*/ _closure_get_patch("a2", 8, ($scope) => _text($scope.b, $scope._._._.f), ($scope) => $scope._._._, "a6", 0);
const $Inner_content__setup__script = _script("a1", ($scope) => _on($scope.a, "click", function() {
	console.log($scope._._._.f);
}));
const $Inner_content__setup = ($scope) => {
	$Inner_content__input_label($scope);
	$Inner_content__setup__script($scope);
};
const $Inner_content = _content$1("a0", "<b> </b>", " D ", $Inner_content__setup);
const $card_content__input_obj = /*@__PURE__*/ _closure_get_patch("a3", 9, ($scope) => {
	$input_o($scope.a, $scope._._.g);
	$input_p($scope.a, $scope._._.g);
}, ($scope) => $scope._._, "a7", 0);
const $card_content__Inner = ($scope, Inner) => {
	$input_a($scope.a, Inner);
	$input_b($scope.a, Inner);
};
const $card_content__setup = ($scope) => {
	$card_content__input_obj($scope);
	$card_content__Inner($scope, { content: $Inner_content($scope) });
};
const $card_content = _content$1("a4", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks), $card_content__setup);
