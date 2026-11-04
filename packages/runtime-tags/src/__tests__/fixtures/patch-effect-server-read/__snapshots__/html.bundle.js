// template.marko
_shells({ a: "a !a0; b ;<div></div><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<div></div>${_el_mark($scope0_id, "a")}<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a2", $fg__input_label && "e") || _script($scope0_id, "a1", 1, $sg__input_label && 2, "e");
	_scope($scope0_id, {
		e: input.label,
		f: count
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !$sg__input_label);
}, 1);
