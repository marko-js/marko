// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let items = input.items;
	const Body = { content: _content("a0", ({ v }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "a", v + input.w, 1, (_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0)}</p>`);
		_subscribe(_unfilled_if((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && $wi__input_w && $input_w__closures, _scope($scope1_id, {
			d: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope1_reason, 0)) && v,
			_: _scope_with_id($scope0_id)
		}), _client_guard((_mask_group($scope0_reason, 1) | _mask_group($scope1_reason, 0)) << 1, 0) && "a1");
	}, $scope0_id) };
	_for_of(items, (v) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope2_id, "a", 0);
		Body.content({ v });
		_patch_child_end();
		_scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a");
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 1));
}, 1);
