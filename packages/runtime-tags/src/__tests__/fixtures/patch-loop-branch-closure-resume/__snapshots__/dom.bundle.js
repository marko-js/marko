// tags/sub.marko
const $if_content__input_n__OR__g = _fill_join("c5", 5, /*@__PURE__*/ _shell_join("c8", /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope._._.g - $scope._._.f))), 0, ($join) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $join)));
const $if_content__g = _shell_closure_get("c9", 8, $if_content__input_n__OR__g, ($scope) => $scope._._, "c3");
const $g = /*@__PURE__*/ _fill_let("c6", 6, /* @__PURE__ */ _closure($if_content__g));
const $setup__script = _script("c4", ($scope) => {
	_on($scope.b, "click", function() {
		$g($scope, +$scope.g + 1);
	});
	document.body.dataset.ok = "1";
});
