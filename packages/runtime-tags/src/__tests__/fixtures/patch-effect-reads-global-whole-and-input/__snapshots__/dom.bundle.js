// template.marko
const $input_page__OR__$global__script = _script("a1", ($scope) => {
	{
		const g = $scope.$;
		$scope.a.textContent = g.user + ":" + $scope.d;
	}
});
const $input_page__OR__$global = /*@__PURE__*/ _or_patch("a2", 4, $input_page__OR__$global__script);
const $global2 = _fill_global("a0", $input_page__OR__$global, "");
