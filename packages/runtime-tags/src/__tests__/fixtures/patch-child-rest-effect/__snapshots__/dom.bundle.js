// tags/dump/index.marko
const $input = ($scope, input) => {
	$input_label($scope, input.label);
	_text($scope.a, JSON.stringify(input));
};
const $input_label__script = _script("b0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + $scope.d + "]";
	}
});
const $input_label = /*@__PURE__*/ _const(3, $input_label__script);

// template.marko
const $input_title__OR__count = /*@__PURE__*/ _fill_join("a1", 4, /*@__PURE__*/ _or(6, ($scope) => $input($scope.a, {
	value: $scope.f,
	label: $scope.e
})));
const $count = /*@__PURE__*/ _fill_let("a2", 5, $input_title__OR__count);
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.f + 1);
}));
