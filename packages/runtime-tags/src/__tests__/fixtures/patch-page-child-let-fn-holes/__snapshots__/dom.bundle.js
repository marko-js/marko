// tags/outer.marko
const $show = /*@__PURE__*/ _show(6, 5);
const $input_label__OR__f = /*@__PURE__*/ _fill_join("b1", 11, /*@__PURE__*/ _or(13, ($scope) => {
	_text($scope.b, $scope.m($scope.l));
	_html($scope, $scope.m($scope.l), "c");
	_attr($scope.d, "title", $scope.m($scope.l));
	_attr_class($scope.d, $scope.m($scope.l));
	_attr_style_item($scope.d, "color", $scope.m($scope.l).length > 3 ? "red" : "blue");
	_text($scope.e, $scope.m($scope.l));
	_text_content($scope.h, $scope.m($scope.l));
	$show($scope, $scope.m($scope.l) !== "w-c");
}));
const $f = /*@__PURE__*/ _fill_let("b2", 12, $input_label__OR__f);
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$f($scope, (v) => "p-" + v);
}));

// template.marko
function $wrap(v) {
	return "w-" + v;
}
_resumed.a0 = $wrap;
