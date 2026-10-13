// template.marko
const $global_brand__script = _fill_global_script("a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
});
_fill_global_join("brand", "a0", $global_brand__script);
const $input_label__script = _script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
