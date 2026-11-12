// template.marko
const $global_brand_key = /*@__PURE__*/ _global_key("brand");
const $global_brand__script = _global_script("a1", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.g = (el.dataset.g || "") + "[" + $scope.$.brand + "]";
	}
}, /*@__PURE__*/ _global_closure($global_brand_key));
const $input_label__script = _script_patch("a0 a2", ($scope) => {
	{
		const el = document.querySelector("main");
		el.dataset.runs = (el.dataset.runs || "") + "(" + $scope.a2 + ")";
	}
});
