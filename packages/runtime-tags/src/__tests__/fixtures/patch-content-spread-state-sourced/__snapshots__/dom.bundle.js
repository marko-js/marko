// tags/box.marko
const $input__OR__count__script = _script("b1", ($scope) => _attrs_script($scope, "a"));
const $input__OR__count = /*@__PURE__*/ _fill_join("b2", 3, /*@__PURE__*/ _or(5, ($scope) => {
	_attrs_content($scope, "a", {
		...$scope.d,
		"data-count": $scope.e
	});
	$input__OR__count__script($scope);
}));
const $count = /*@__PURE__*/ _fill_let("b3", 4, $input__OR__count);
const $setup__script = _script("b0", ($scope) => _on($scope.b, "click", function() {
	$count($scope, +$scope.e + 1);
}));

// template.marko
const $box_content__input_note = /*@__PURE__*/ _fill_join_closure("a2", 4, /*@__PURE__*/ _closure_get(5, ($scope) => _text($scope.a, $scope._.e), 0, "a0"), 0);
const $box_content = _content("a1", "<em> </em>", "D ", $box_content__input_note);
