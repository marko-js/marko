// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $g = ($scope, g) => _text($scope.b, g());
const $input_fn__OR__open = /*@__PURE__*/ _fill("b1", 4, /*@__PURE__*/ _or(6, ($scope) => $g($scope, $scope.f ? $scope.e : () => "-")));
const $open = /*@__PURE__*/ _fill_let("b2", 5, $input_fn__OR__open);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$open($scope, !$scope.f);
}));
function $setup($scope) {
	$setup__script($scope);
	$open($scope, true);
}
const $input_fn = /*@__PURE__*/ _const(4, $input_fn__OR__open);

// template.marko
const $placeholder_content__input_label = /*@__PURE__*/ _fill_closure("a8", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $input_fn($scope.a, $fn($scope)), 0, "a1"), 0);
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__input_label($scope);
	$setup($scope.a);
};
const $placeholder_content = _content$1("a7", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
const $fn = ($scope) => function() {
	return "f:" + $scope._.d;
};
_bind_resume("a0 >d", $fn);
