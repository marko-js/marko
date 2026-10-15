// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Rec = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_label = _write_guard($scope1_reason, 2), $wg__input_depth__OR__input_label = _write_guard($scope1_reason, 0), $wg__input_depth = _write_guard($scope1_reason, 1);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_scope_reason($wg__input_depth__OR__input_label << 1 | $wg__input_depth << 3 | $wg__input_label << 5);
				const $childScope = _peek_scope_id();
				let child = Rec.content({
					depth: input.depth - 1,
					label: input.label
				});
				_var($scope2_id, "b", $childScope, "a0");
				_html(`<span>${_text_resume($scope2_id, "c", child, $wg__input_label)}</span>`);
				_write_if($scope1_reason, 0) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", $wg__input_depth__OR__input_label, $wg__input_depth);
		const $return = input.label;
		_write_if($scope1_reason, 1) && _scope($scope1_id, { e: input.label });
		return $return;
	}, $scope0_id) };
	let label = "a";
	Rec.content({
		depth: 1,
		label: "x"
	});
	_set_scope_reason(34);
	const $childScope2 = _peek_scope_id();
	Rec.content({
		depth: 1,
		label
	});
	_html(`<button>${_text_resume($scope0_id, "d", label)}</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: label,
		b: _existing_scope($childScope2)
	});
}, 1);
