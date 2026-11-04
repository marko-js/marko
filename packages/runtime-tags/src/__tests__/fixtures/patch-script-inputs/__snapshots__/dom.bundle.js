// template.marko
const $input_a__OR__input_b__script = _script_patch("a0 e f", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.pair = $scope.e + $scope.f;
		el.dataset.runs = String(+(el.dataset.runs || 0) + 1);
	}
});
