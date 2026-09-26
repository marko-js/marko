// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const Rec = { content: _content("a1", (input) => {
		const $scope1_id = _scope_id();
		const $sg__input_depth = _serialize_guard(_scope_reason(), 0);
		let s = 0;
		const $return = input.label;
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_serialize_reason($sg__input_depth << 1);
				const $childScope = _peek_scope_id();
				let child = Rec.content({
					depth: input.depth - 1,
					label: s
				});
				_var($scope2_id, "b", $childScope, "a0");
				_html(`<span>${_text_resume($scope2_id, "c", child)}</span>`);
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _existing_scope($childScope)
				});
				return 0;
			}
		}, $scope1_id, "a", 1, $sg__input_depth, $sg__input_depth);
		_html(`<button>${_text_resume($scope1_id, "c", s)}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a2");
		_scope($scope1_id, { h: s });
		return $return;
	}, _scope_id()) };
	Rec.content({
		depth: 1,
		label: "x"
	});
}, 1);
