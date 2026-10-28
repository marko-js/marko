// tags/sub.marko
const $if_content__input_n__OR__g = /*@__PURE__*/ _fill_signal("5 c5", /*@__PURE__*/ _or_resume("c9", 1, ($scope) => _text($scope.a, $scope._._.g - $scope._._.f)), ($signal) => /*@__PURE__*/ _for_closure(0, /*@__PURE__*/ _if_closure(0, 0, $signal)));
const $if_content__g = /*@__PURE__*/ _init_resume("c8", /*@__PURE__*/ _closure_get(8, $if_content__input_n__OR__g, ($scope) => $scope._._, "c1"));
const $g = /*@__PURE__*/ _fill_let("c6", 6, /* @__PURE__ */ _closure($if_content__g));
const $setup__script = _script("c4", ($scope) => {
	_on($scope.b, "click", function() {
		$g($scope, +$scope.g + 1);
	});
	document.body.dataset.ok = "1";
});
