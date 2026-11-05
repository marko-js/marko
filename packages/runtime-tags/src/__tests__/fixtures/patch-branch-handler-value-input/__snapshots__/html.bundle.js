// template.marko
_shells({ a: "a !a2; b%bD ;<button class=toggle>toggle</button><!><output> </output>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_mode = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	let out = "-";
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button class=go>go</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 0), ">f");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<output>${_text_mark($scope0_id, "c", out)}</output>`);
	_script($scope0_id, "a2");
	$fg__input_mode && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		f: input.mode,
		g: open
	}) || $fg__input_mode && _patch_write($scope0_id, "xf", input.mode, !_server_guard($scope0_reason, 0));
}, 1);
