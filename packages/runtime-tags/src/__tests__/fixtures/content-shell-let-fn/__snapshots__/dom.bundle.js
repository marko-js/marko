// tags/card.marko
const $template = "<button> </button>";
const $walks = " D l";
const $f = /*@__PURE__*/ _let(5, ($scope) => _text($scope.b, $scope.f()));
const $input_fn = $f;
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, () => "x");
}));
const $setup = $setup__script;

// template.marko
const $wrapper_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => $input_fn($scope.a, function() {
	return "f:" + $scope._.e;
}), 0, "a0");
const $wrapper_content__setup = ($scope) => {
	$wrapper_content__input_label($scope);
	$setup($scope.a);
};
const $wrapper_content = _content("a1", $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $wrapper_content__setup);
