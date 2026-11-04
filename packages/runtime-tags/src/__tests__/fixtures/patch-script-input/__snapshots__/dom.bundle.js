// template.marko
const $input_announce__script = _script_patch("a0 e", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.announce = $scope.e;
		el.dataset.runs = String(+(el.dataset.runs || 0) + 1);
	}
});
