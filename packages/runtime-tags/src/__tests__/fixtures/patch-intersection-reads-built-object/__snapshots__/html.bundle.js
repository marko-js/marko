// template.marko
_shells({ a: "a !a0;D l ;<p> </p><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_x = _server_guard($scope0_reason, 0), $fg__input_x = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	const b = { value: input.x };
	_html(`<p>${_text_mark($scope0_id, "a", "0:" + JSON.stringify(b))}</p><button>+</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_x && "e");
	_scope($scope0_id, {
		f: count,
		g: b
	}) || ($fg__input_x && _patch_write($scope0_id, "xe", input.x, !$sg__input_x), $fg__input_x && _patch_write($scope0_id, "xg", b, !$sg__input_x));
}, 1);
