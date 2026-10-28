// tags/card.marko
const $template = "<section><button>clear</button><!></section>";
const $walks = "D b%l";
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _fill_signal("4 b1", /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e)));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $open = /*@__PURE__*/ _fill_let("b2", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, false);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_content = /*@__PURE__*/ _fill_const("b1", 4, $if_content__input_content);

// template.marko
const $card_content__input_label = /*@__PURE__*/ _init_resume("a0", /*@__PURE__*/ _fill_closure("a7", 5, /*@__PURE__*/ _closure_get(7, ($scope) => _text($scope.a, $scope._._._.f), ($scope) => $scope._._._, "a1"), 0));
const $card_content = _content$1("a2", "<em>static <!></em>", "Db%", $card_content__input_label);
const $inputeldiv_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $card_content($scope));
};
const $inputeldiv_content = _content$1("a3", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $inputeldiv_content__setup);
_content_resume($inputeldiv_content);
