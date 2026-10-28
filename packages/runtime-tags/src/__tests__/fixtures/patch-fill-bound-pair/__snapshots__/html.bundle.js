// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $sg__input_a = _server_guard($scope0_reason, 1), $sg__input_b = _server_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.a, !$sg__input_a);
	_filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.b, !$sg__input_b);
	const fa = _bind_resume(() => input.a, "a0", $scope0_id);
	const fb = _bind_resume(() => input.b, "a1", $scope0_id);
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.a,
		f: input.b,
		g: fa,
		h: fb,
		i: open
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", fa, !$sg__input_a), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", fb, !$sg__input_b));
}, 1);
