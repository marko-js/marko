// template.marko
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $global_mode = /*@__PURE__*/ _global_closure("a2", /* @__PURE__ */ _global_key(2, "mode"), ($scope) => $global_mode__script($scope));
const $global_mode__script = _global_script("a0", ($scope) => _on($scope.a, "click", handlers[$scope.$.mode]), $global_mode);
