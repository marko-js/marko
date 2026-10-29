// template.marko
_shells({ a: "a !;b%;<!><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let items = input.items;
	_for_of(items, (v) => {
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", Promise.resolve(v), (r) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", r + input.w)}</p>`);
			_subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { c: $wi__input_w && r }), "a0");
		}, void 0, 0);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a");
	_scope($scope0_id, {
		e: input.w,
		g: $wi__input_w && $input_w__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va1", input.w, !_server_guard($scope0_reason, 1));
}, 1);
