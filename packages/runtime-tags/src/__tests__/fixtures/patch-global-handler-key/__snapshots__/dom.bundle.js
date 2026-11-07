// template.marko
const handlers = {
	a() {
		document.body.dataset.ran = "a";
	},
	b() {
		document.body.dataset.ran = "b";
	}
};
const $global_mode__script = _script("a1", ($scope) => _on($scope.a, "click", handlers[$scope.$.mode]));
const $global_mode = _fill_global("a0", $global_mode__script, "mode");
