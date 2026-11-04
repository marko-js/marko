// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_a__OR__input_b = _filled_guard($scope0_reason, 0), $fg__input_a = _filled_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_a && _patch_write($scope0_id, "xe", input.a, !_server_guard($scope0_reason, 1));
	$fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 2));
	const fmt = _bind_resume(() => input.a + ":" + input.b, "a0", $scope0_id);
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_a__OR__input_b && _patch_render($scope0_id, "a1", [
		"h",
		$fg__input_a && "e",
		$fg__input_b && "f"
	]);
	_patch_render($scope0_id, "a3", [$fg__input_a && "e", $fg__input_b && "f"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		h: fmt,
		i: open
	}) || $fg__input_a__OR__input_b && _patch_write($scope0_id, "xh", fmt, !_server_guard($scope0_reason, 0));
}, 1);
