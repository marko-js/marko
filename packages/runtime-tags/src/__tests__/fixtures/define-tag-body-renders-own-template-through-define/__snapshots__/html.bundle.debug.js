// tags/tree.marko
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.depth, $wg__input_depth)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const Label = { content: _content("__tests__/tags/tree.marko_2*content", ({ depth }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__depth = _write_guard($scope2_reason, 0);
		_html(`<b>${_text_resume($scope2_id, "#text/0", depth, $wg__depth)}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/tags/tree.marko", "3:2");
	}, $scope0_id) };
	const Child = { content: _content("__tests__/tags/tree.marko_3*content", ({ depth }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__depth2 = _write_guard($scope3_reason, 0);
		_set_scope_reason($wg__depth2 << 1);
		const $childScope = _peek_scope_id();
		$content({ depth: depth - 1 });
		_write_if($scope3_reason, 0) && _scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/tree.marko", "4:2");
	}, $scope0_id) };
	const Level = { content: _content("__tests__/tags/tree.marko_4*content", ({ depth }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason(), $wg__depth3 = _write_guard($scope4_reason, 0);
		_set_scope_reason($wg__depth3 << 1);
		const $childScope2 = _peek_scope_id();
		Child.content({ depth });
		_write_if($scope4_reason, 0) && _scope($scope4_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/tags/tree.marko", "5:2");
	}, $scope0_id) };
	_if(() => {
		if (open && input.depth) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_depth << 1);
			const $childScope3 = _peek_scope_id();
			Level.content({ depth: input.depth });
			_scope($scope1_id, { "#childScope/0": $wi__input_depth && _existing_scope($childScope3) }, "__tests__/tags/tree.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_set_scope_reason($wg__input_depth << 1);
	const $childScope4 = _peek_scope_id();
	Label.content({ depth: input.depth });
	_script($scope0_id, "__tests__/tags/tree.marko_0");
	_scope($scope0_id, {
		input_depth: input.depth,
		open,
		"#childScope/3": $wi__input_depth && _existing_scope($childScope4)
	}, "__tests__/tags/tree.marko", 0, {
		input_depth: ["input.depth"],
		open: "1:6"
	});
};
var tree_default = _template("__tests__/tags/tree.marko", $content);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	tree_default({ depth: 2 });
}, 1);
