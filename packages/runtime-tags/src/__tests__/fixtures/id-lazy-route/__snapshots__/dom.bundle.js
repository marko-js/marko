// tags/sub.marko
const $if_content__input_n__OR__g = /*@__PURE__*/ _or(3, ($scope) => _text($scope.c, $scope._._.g - $scope._._.f));
const $if_content__g = /*@__PURE__*/ _closure_get(8, $if_content__input_n__OR__g, ($scope) => $scope._._, "c1");
const $g = /*@__PURE__*/ _let(6, /* @__PURE__ */ _closure($if_content__g));
const $setup__script = _script("c2", ($scope) => {
	_on($scope.b, "click", function() {
		$g($scope, +$scope.g + 1);
	});
	document.body.dataset.ok = "1";
});
