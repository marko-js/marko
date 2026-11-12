// template.marko
const $global2__script = _global_script("a1", ($scope) => {
	{
		const g = $scope.$;
		const el = document.querySelector("main");
		el.dataset.log = (el.dataset.log || "") + "[" + g.brand + "]";
	}
}, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key()));
