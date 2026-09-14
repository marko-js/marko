// template.marko
const $input_a__OR__input_b = /*@__PURE__*/ _or(6, _script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.pair = $scope.e + $scope.f;
		el.dataset.runs = String(+(el.dataset.runs || 0) + 1);
	}
}));
