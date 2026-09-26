// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Item = { content: _content("__tests__/template.marko_1*content", ({ depth }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__depth = _serialize_guard($scope1_reason, 0);
		_if(() => {
			if (depth) {
				const $scope2_id = _scope_id();
				_set_serialize_reason($sg__depth << 1);
				const $childScope = _peek_scope_id();
				Item.content({ depth: depth - 1 });
				_serialize_if($scope1_reason, 0) && _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__depth, $sg__depth, $sg__depth);
		_html(`<button>${_text_resume($scope1_id, "#text/2", depth, $sg__depth)}</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { depth }, "__tests__/template.marko", "1:2", { depth: "1:16" });
	}, $scope0_id) };
	Item.content({ depth: 2 });
}, 1);
