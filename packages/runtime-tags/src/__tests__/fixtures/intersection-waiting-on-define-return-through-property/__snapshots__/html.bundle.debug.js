// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 1;
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = { a: input.x + input.y };
		_scope($scope1_id, {
			input_x: input.x,
			input_y: input.y
		}, "__tests__/template.marko", "3:2", {
			input_x: ["input.x", "3:15"],
			input_y: ["input.y", "3:15"]
		});
		return $return;
	}, $scope0_id) };
	_set_scope_reason(42);
	const $childScope = _peek_scope_id();
	let r = Child.content({
		x: count,
		y: other
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_r#6/var");
	const o = { ...r };
	_html(`<p>${_text_mark($scope0_id, "#text/2", o.a + other)}</p><button>inc</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		other,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		other: "2:6"
	});
}, 1);
