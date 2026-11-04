// template.marko
_shells({ a: "a !a2; b%;<button>add</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_v = _filled_guard($scope0_reason, 1), $fg__input_w = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button>add</button>${_el_mark($scope0_id, "a")}`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		let x = input.v;
		_html(`<p>${_escape(i)}:${_text_mark($scope1_id, "b", x, 2)} ${_text_mark($scope1_id, "c", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "a0");
		_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "a1");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a2");
	$fg__input_v && _patch_render($scope0_id, "a0", "e");
	$fg__input_w && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		g: n
	}) || ($fg__input_v && _patch_write($scope0_id, "xe", input.v, !_server_guard($scope0_reason, 1)), $fg__input_w && _patch_write($scope0_id, "xf", input.w, !_server_guard($scope0_reason, 2)));
}, 1);
