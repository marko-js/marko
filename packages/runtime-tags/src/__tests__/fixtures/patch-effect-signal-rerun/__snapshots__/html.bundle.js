// template.marko
_shells({ a: "a !a1; D l ;<button> </button><p></p>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_mark($scope0_id, "b", clicks)}</button>${_el_mark($scope0_id, "a")}<p></p>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0", 1, $fg__input_label);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.label,
		g: clicks
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
