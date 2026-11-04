// tags/my-tag.marko
_shells({ b: "b !;b%bD ;<!><!><span> </span>" });
var my_tag_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", input.value, $wg__input_value)}</p>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<span>${_text_mark($scope0_id, "b", input.value, 1, $scope0_reason, 0)}</span>`);
	_script($scope0_id, "b1", 1, $fg__input_value, "e");
	$fg__input_value && _patch_render($scope0_id, "b0", "e");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, { e: input.value }) || $fg__input_value && _patch_write($scope0_id, "xe", input.value, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !a1; b%;<button>toggle</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_value = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a1");
	$fg__input_value && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.value,
		f: show
	}) || $fg__input_value && _patch_write($scope0_id, "xe", input.value, !_server_guard($scope0_reason, 0));
}, 1);
