// tags/outer.marko
const $input_label__OR__f__script = _script("b0", ($scope) => {
	_attrs_script($scope, "b");
	_attrs_script($scope, "c");
	_attrs_script($scope, "d");
});
const $input_label__OR__f = /*@__PURE__*/ _fill_join("b2", 7, /*@__PURE__*/ _or_resume("b3", 9, ($scope) => {
	if ("i" in $scope) {
		_attrs_content($scope, "b", $scope.i($scope.h));
		_attrs_content($scope, "c", { title: $scope.i($scope.h).title });
		_attrs($scope, "d", { title: $scope.i($scope.h).title });
	}
	$input_label__OR__f__script($scope);
}));
const $f = /*@__PURE__*/ _let(8, $input_label__OR__f);
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$f($scope, (v) => ({ title: "p-" + v }));
}));

// template.marko
const $Body_content = _content$1("a1", "<b>body</b>");
const $wrap = ($scope) => (v) => ({
	title: "w-" + v,
	content: $scope.g
});
_resumed.a0 = $wrap;
