// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let items = input.items;
	const Body = { content: _content("a1", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0);
		_if(() => {
			if (v) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", v + input.w, $wg__input_w || $wg__v)}</p>`);
				_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_w || $wg__v);
				return 0;
			}
		}, $scope1_id, "a", $wg__v, $wg__v, 0, 0, 1);
		_scope($scope1_id, {
			d: $wi__input_w && v,
			_: _scope_with_id($scope0_id)
		}) || _filled_guard($scope1_reason, 0) && _patch_fill($scope1_id, "va2", v, !_server_guard($scope1_reason, 0));
	}, $scope0_id) };
	_for_of(items, (v) => {
		const $scope3_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope3_id, "a", 0);
		Body.content({ v });
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a");
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.w, !_server_guard($scope0_reason, 1));
}, 1);
