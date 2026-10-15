// template.marko
const $global_brand__script = _fill_global_script("a0", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
}, "brand");
const $input_label__script = _script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
