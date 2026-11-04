// tags/sub.marko
const $if_content__input_n__OR__g = /*@__PURE__*/ _or_patch("c1", 1, ($scope) => _text($scope.a, $scope._._.g - $scope._._.f));
const $if_content__g = /*@__PURE__*/ _closure_get_patch("c2", 8, $if_content__input_n__OR__g, ($scope) => $scope._._);
const $g = /*@__PURE__*/ _fill_let("c7", 6, /* @__PURE__ */ _closure($if_content__g));
const $setup__script = _script("c5", ($scope) => {
	_on($scope.b, "click", function() {
		$g($scope, +$scope.g + 1);
	});
	document.body.dataset.ok = "1";
});
