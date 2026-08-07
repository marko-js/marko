// tags/dump/index.marko
const $input = ($scope, input) => {
	_text($scope.a, JSON.stringify(input));
	$input_label($scope, input.label);
};
const $input_label = /*@__PURE__*/ _const(3, _script("b0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.d + "]";
	}
}));

// template.marko
const $input_title__OR__count = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _or(6, ($scope) => $input($scope.a, {
	value: $scope.f,
	label: $scope.e
})));
const $count = /*@__PURE__*/ _let(5, $input_title__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, $scope.f + 1);
}));
