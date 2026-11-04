// template.marko
_shells({ a: "a !a1;b%b ;<!><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $sg__input_label = _server_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const label = input.label;
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	$fg__input_label && _patch_render($scope0_id, "a0", "g");
	_patch_render($scope0_id, "a2", $fg__input_label && "g");
	_scope($scope0_id, {
		f: count,
		g: label
	}) || $fg__input_label && _patch_write($scope0_id, "xg", label, !$sg__input_label);
}, 1);
