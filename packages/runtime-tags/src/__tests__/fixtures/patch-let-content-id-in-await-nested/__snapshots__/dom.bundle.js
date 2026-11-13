// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag(2);
const $c = _let(6, ($scope) => {
	$dynamicTag($scope, $scope.g);
	$dynamicTag2($scope, $scope.g);
});
const $input_content = $c;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$c($scope, void 0);
}));
const $setup = $setup__script;

// template.marko
const $await_content__input_label = /*@__PURE__*/ _closure_get_patch("a0", 7, ($scope) => _text($scope.d, $scope._._._._.f), ($scope) => $scope._._._._, "a6", 0);
const $await_content__uid = ($scope, uid) => {
	_attr($scope.a, "id", uid);
	_attr($scope.b, "for", uid);
};
const $await_content__setup = ($scope) => {
	$await_content__input_label($scope);
	$await_content__uid($scope, _id($scope));
};
const $await_content__$params = ($scope, $params2) => _text($scope.c, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<input><label><!><!></label>", " b D%b%", $await_content__setup);
const $card_content2__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $card_content2__input_p = /*@__PURE__*/ _closure_get_patch("a2", 6, ($scope) => $card_content2__await_promise($scope, $scope._._._.e), ($scope) => $scope._._._, "a5", 0);
const $card_content2__setup = ($scope) => {
	$card_content2__input_p($scope);
	$await_content($scope);
};
const $card_content2 = _content$1("a3", "<!><!><!>", "b%", $card_content2__setup);
const $card_content__setup = ($scope) => {
	$setup($scope.a);
	$input_content($scope.a, $card_content2($scope));
};
const $card_content = _content$1("a4", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $card_content__setup);
