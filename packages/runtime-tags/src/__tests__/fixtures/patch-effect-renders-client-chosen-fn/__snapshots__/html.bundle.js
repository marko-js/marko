// template.marko
_shells({ a: "a !a2;D l ;<output> </output><button>toggle</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xe", input.title, !$sg__input_title);
	let upper = false;
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	const pick = low;
	_html(`<output>${_text_mark($scope0_id, "a", pick())}</output><button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_script($scope0_id, "a3", 1, $sg__input_title && 2);
	_patch_render($scope0_id, "a4", (($fg__input_title ? " g" : "") + ($fg__input_title ? " e" : "") + ($fg__input_title ? " h" : "")).slice(1));
	_scope($scope0_id, {
		e: input.title,
		f: upper,
		g: up,
		h: low,
		j: pick
	}) || ($fg__input_title && _patch_write($scope0_id, "xg", up, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "xh", low, !$sg__input_title));
}, 1);
