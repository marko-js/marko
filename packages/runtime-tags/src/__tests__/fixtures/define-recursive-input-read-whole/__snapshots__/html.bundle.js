// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tree = { content: _content("a0", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_depth__OR__input_label = _serialize_guard($scope1_reason, 0), $sg__input_depth = _serialize_guard($scope1_reason, 1), $sg__input_label = _serialize_guard($scope1_reason, 2), $si__input_depth__OR__input_label = _serialize_if($scope1_reason, 0);
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_serialize_reason($sg__input_depth__OR__input_label << 1 | $sg__input_depth__OR__input_label << 3 | $sg__input_depth__OR__input_label << 5);
				const $childScope = _peek_scope_id();
				Tree.content({
					depth: input.depth - 1,
					label: input.label
				});
				$si__input_depth__OR__input_label && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", $sg__input_depth__OR__input_label, $sg__input_depth, $sg__input_depth);
		_html(`<span>${_text_resume($scope1_id, "b", input.label, $sg__input_label)}</span>`);
		$si__input_depth__OR__input_label && _scope($scope1_id, {
			e: _serialize_if($scope1_reason, 2) && input.depth,
			f: _serialize_if($scope1_reason, 1) && input.label
		});
	}, $scope0_id) };
	let depth = 1;
	_set_serialize_reason(10);
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
