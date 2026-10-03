// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tree = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_depth__OR__input_label = _write_guard($scope1_reason, 0), $wg__input = _write_guard($scope1_reason, 1), $wg__input_depth = _write_guard($scope1_reason, 2), $wg__input_label = _write_guard($scope1_reason, 3);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth__OR__input_label << 3 | $wg__input_depth__OR__input_label << 5 | $wg__input_depth__OR__input_label << 7);
				const $childScope = _peek_scope_id();
				Tree.content({
					depth: input.depth - 1,
					label: input.label
				});
				_write_if($scope1_reason, 0) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", $wg__input_depth__OR__input_label, $wg__input_depth);
		_html(`<span>${_text_resume($scope1_id, "b", input.label, $wg__input_label)}:${_text_resume($scope1_id, "c", Object.keys(input).join(","), $wg__input * 2)}</span>`);
		_write_if($scope1_reason, 1) && _scope($scope1_id, {
			f: _write_if($scope1_reason, 3) && input.depth,
			g: _write_if($scope1_reason, 2) && input.label
		});
	}, $scope0_id) };
	let depth = 1;
	_set_scope_reason(170);
	const $childScope2 = _peek_scope_id();
	Tree.content({
		depth,
		label: "x"
	});
	_html(`<button>deeper</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: depth,
		a: _existing_scope($childScope2)
	});
}, 1);
