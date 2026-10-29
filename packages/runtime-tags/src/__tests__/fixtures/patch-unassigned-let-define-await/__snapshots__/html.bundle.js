// template.marko
_shells({
	a2: "a2;D ;<p> </p>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_w = _client_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $input_v__closures = /* @__PURE__ */ new Set();
	let show = input.show;
	const Body = { content: _content("a3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", Promise.resolve(input.v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", r + input.w, 1, $scope0_reason, 0)}</p>`);
			_filled_guard($scope0_reason, 2) && $cg__input_w && _patch_write($scope2_id, "xc", r);
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope2_id, "a0");
			_patch_join_init($scope2_id, "a1", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">>f", _filled_guard($scope0_reason, 2) && "c");
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_w__closures, _scope($scope2_id, { c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0)) && r }), $cg__input_w && "a0");
		}, 1, "a2", _unfilled_if($scope0_reason, 2));
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_v__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a4", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_if(() => {
		if (show) {
			const $scope3_id = _scope_id();
			_patch_child(0);
			Body.content({});
			_patch_child_end();
			_scope($scope3_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a");
	_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "va6", input.w);
	_scope($scope0_id, {
		e: input.v,
		f: input.w,
		i: _write_if($scope0_reason, 3) && $input_w__closures,
		h: _write_if($scope0_reason, 2) && $input_v__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.v, !_server_guard($scope0_reason, 2));
}, 1);
