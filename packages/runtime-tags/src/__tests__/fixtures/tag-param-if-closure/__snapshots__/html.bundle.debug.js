// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const a = "abc";
	const Foo = { content: _content("__tests__/template.marko_3_content", (input) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_dynamic_tag($scope3_id, "#text/0", input.content, [input.value], 0, 1, _serialize_guard($scope3_reason, 0));
		_serialize_if($scope3_reason, 0) && writeScope($scope3_id, {
			input_content: _serialize_if($scope3_reason, 2) && input.content,
			input_value: _serialize_if($scope3_reason, 1) && input.value
		}, "__tests__/template.marko", "3:2", {
			input_content: ["input.content", "3:13"],
			input_value: ["input.value", "3:13"]
		});
	}) };
	_html(`<button>Increment</button>${_el_resume($scope0_id, "#button/0")}`);
	const $childScope = _peek_scope_id();
	_set_serialize_reason({
		0: 1,
		2: 1
	});
	Foo.content({
		value: count,
		content: _content_resume("__tests__/template.marko_1_content", (v) => {
			const $scope1_reason = _scope_reason(), $sg__v = _serialize_guard($scope1_reason, 0);
			const $scope1_id = _scope_id();
			_if(() => {
				if (v) {
					const $scope2_id = _scope_id();
					_html(_escape(a));
					writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "10:4");
					return 0;
				}
			}, $scope1_id, "#text/0", $sg__v, $sg__v, $sg__v, 0, 1);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "9:2");
		}, $scope0_id)
	});
	_script($scope0_id, "__tests__/template.marko_0_count");
	writeScope($scope0_id, {
		count,
		a,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		a: "2:8"
	});
	_resume_branch($scope0_id);
}, 1);
