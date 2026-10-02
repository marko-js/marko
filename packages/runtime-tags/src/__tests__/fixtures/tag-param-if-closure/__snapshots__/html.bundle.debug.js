// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const a = "abc";
	const Foo = { content: _content("__tests__/template.marko_3*content", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__input_content__OR__input_value = _write_guard($scope3_reason, 0);
		_dynamic_tag($scope3_id, "#text/0", input.content, [input.value], 0, 1, $wg__input_content__OR__input_value);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {
			input_content: _write_if($scope3_reason, 2) && input.content,
			input_value: _write_if($scope3_reason, 1) && input.value
		}, "__tests__/template.marko", "3:2", {
			input_content: ["input.content", "3:13"],
			input_value: ["input.value", "3:13"]
		});
	}, $scope0_id) };
	_html(`<button>Increment</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(34);
	const $childScope = _peek_scope_id();
	Foo.content({
		value: count,
		content: _content_resume("__tests__/template.marko_1*content", (v) => {
			const $scope1_reason = _scope_reason(), $wg__v = _write_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_if(() => {
				if (v) {
					const $scope2_id = _scope_id();
					_html(_escape(a));
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "10:4");
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__v, $wg__v);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		a,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		a: "2:8"
	});
}, 1);
