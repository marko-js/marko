// template.marko
_shells({
	a: "a !a6; b%;<button class=toggle>toggle</button><!><!>",
	a2: "a2;D ;<span> </span>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_x__closures = /* @__PURE__ */ new Set();
	let show = true;
	const Show = { content: _content("a3", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__v = _server_guard($scope1_reason, 0);
		_filled_guard($scope1_reason, 0) && _unfilled_if($scope1_reason, 0) && _patch_write($scope1_id, "xd", v, !$sg__v);
		const f = _bind_resume(function() {
			return v;
		}, "a0", $scope1_id);
		_if(() => {
			if (input.x) {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_resume($scope3_id, "a", f(), 1, $scope1_reason, 0)}</span>`);
				_client_guard($scope1_reason, 0) && _patch_init($scope3_id, "a1");
				_scope($scope3_id, { _: _write_if($scope1_reason, 0) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "a", 1, $wg__input_x, 1, 0, 0, ["a2"], $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_x__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && v,
			e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope1_reason, 0)) && f,
			_: _scope_with_id($scope0_id)
		}), "a5", $wg__input_x) || _filled_guard($scope1_reason, 0) && _client_guard($scope0_reason, 0) && _patch_fill($scope1_id, "va4", f, !$sg__v);
		$wg__input_x || _resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope2_id, "a", 0);
			Show.content({ v: input.a });
			_patch_child_end();
			_scope($scope2_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		e: input.x,
		f: input.a,
		g: show,
		h: _write_if($scope0_reason, 0) && $input_x__closures
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va7", input.x, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va8", input.a, !_server_guard($scope0_reason, 1)));
}, 1);
