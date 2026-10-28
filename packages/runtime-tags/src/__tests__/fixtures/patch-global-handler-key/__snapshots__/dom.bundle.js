// template.marko
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $setup__$global_mode = _fill_global_script("a0", ($scope) => _on($scope.a, "click", handlers[$scope.$.mode]), "mode");
