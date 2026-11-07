// template.marko
_shells({ a: "a !a2; D ;<button> </button>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count + $global$1.brand)}</button>${_el_mark($scope0_id, "a")}`);
	_fill_global_subscribe("a0", $scope0_id, 1);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_patch_render($scope0_id, "a3", "g");
	_scope($scope0_id, { c: count });
}, 1);
