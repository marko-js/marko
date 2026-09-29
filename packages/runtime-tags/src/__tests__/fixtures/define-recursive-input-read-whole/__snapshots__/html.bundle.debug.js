// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Tree = { content: _content("__tests__/template.marko_1*content", (input) => {
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
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_depth__OR__input_label, $sg__input_depth, $sg__input_depth);
		const all = input;
		_html(`<span>${_text_resume($scope1_id, "#text/1", input.label, $sg__input_label)}</span>`);
		$si__input_depth__OR__input_label && _scope($scope1_id, {
			input_depth: _serialize_if($scope1_reason, 2) && input.depth,
			input_label: _serialize_if($scope1_reason, 1) && input.label
		}, "__tests__/template.marko", "1:2", {
			input_depth: ["input.depth", "1:14"],
			input_label: ["input.label", "1:14"]
		});
	}, $scope0_id) };
	let depth = 1;
	_set_serialize_reason(10);
	const $childScope2 = _peek_scope_id();
	Tree.content({
		depth,
		label: "x"
	});
	_html(`<button>deeper</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		depth,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { depth: "8:6" });
}, 1);
