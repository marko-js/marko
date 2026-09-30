// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Rec = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $sg__input_depth = _serialize_guard($scope1_reason, 0);
		let n = 0;
		_if(() => {
			if (input.depth) {
				const $scope2_id = _scope_id();
				_set_serialize_reason($sg__input_depth << 1);
				const $childScope = _peek_scope_id();
				let child = Rec.content({ depth: input.depth - 1 });
				_var($scope2_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_2_child#3/var");
				_html(`<span>${_text_resume($scope2_id, "#text/2", child)}</span>`);
				_scope($scope2_id, {
					_: _serialize_if($scope1_reason, 0) && _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", $sg__input_depth, $sg__input_depth, $sg__input_depth);
		_html(`<button>${_text_resume($scope1_id, "#text/2", n)}</button>${_el_resume($scope1_id, "#button/1")}`);
		const $return = n;
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { n }, "__tests__/template.marko", "1:2", { n: "2:8" });
		return $return;
	}, $scope0_id) };
	Rec.content({ depth: 1 });
}, 1);
