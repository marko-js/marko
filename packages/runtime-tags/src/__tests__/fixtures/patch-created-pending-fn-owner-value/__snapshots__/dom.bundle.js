// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $input_fn__OR__open = /*@__PURE__*/ _or_patch("b1", 6, ($scope) => _text($scope.b, ($scope.f ? $scope.e : () => "-")()));
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
const $placeholder_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 5, ($scope) => $input_fn($scope.a, $fn($scope)), 0, "a7", 0);
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__input_label($scope);
	$setup($scope.a);
};
const $placeholder_content = _content$1("a6", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $placeholder_content__setup);
const $fn = ($scope) => function() {
	return "f:" + $scope._.d;
};
_bind_resume("a0 >d", $fn);
