// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>${_text_resume($scope0_id, "b", input.depth, $wg__input_depth)}</button>${_el_resume($scope0_id, "a")}`);
	const Label = { content: _content("b0", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__depth = _write_guard($scope2_reason, 0);
		_html(`<b>${_text_resume($scope2_id, "a", depth, $wg__depth)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, $scope0_id) };
	const Child = { content: _content("b1", ({ depth }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__depth2 = _write_guard($scope3_reason, 0);
		_set_scope_reason($wg__depth2 << 1);
		const $childScope = _peek_scope_id();
		$content({ depth: depth - 1 });
		_write_if($scope3_reason, 0) && _scope($scope3_id, { a: _existing_scope($childScope) });
	}, $scope0_id) };
	const Level = { content: _content("b2", ({ depth }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__depth3 = _write_guard($scope4_reason, 0);
		_set_scope_reason($wg__depth3 << 1);
		const $childScope2 = _peek_scope_id();
		Child.content({ depth });
		_write_if($scope4_reason, 0) && _scope($scope4_id, { a: _existing_scope($childScope2) });
	}, $scope0_id) };
	_if(() => {
		if (input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope3 = _peek_scope_id();
			Level.content({ depth: input.depth });
			_scope($scope1_id, { a: $wi__input_depth && _existing_scope($childScope3) });
			return 0;
		}
	}, $scope0_id, "c");
	_set_scope_reason($wg__input_depth << 1);
	const $childScope4 = _peek_scope_id();
	Label.content({ depth: input.depth });
	_script($scope0_id, "b3");
	_scope($scope0_id, {
		g: input.depth,
		h: open,
		d: $wi__input_depth && _existing_scope($childScope4)
	});
};
var tree_default = _template("b", $content);

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	tree_default({ depth: 2 });
}, 1);
