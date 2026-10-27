// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render(), $sg__input_a = _server_guard($scope0_reason, 1), $sg__input_b = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_fill($scope0_id, "va2", input.a, !$sg__input_a) : _patch_write($scope0_id, "xe", input.a, !$sg__input_a));
	_filled_guard($scope0_reason, 2) && (_client_guard($scope0_reason, 1) ? _patch_fill($scope0_id, "va3", input.b, !$sg__input_b) : _patch_write($scope0_id, "xf", input.b, !$sg__input_b));
	const fmt = _bind_resume(() => input.a + ":" + input.b, "a0", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		h: fmt,
		i: open
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", fmt, !_server_guard($scope0_reason, 0));
}, 1);
