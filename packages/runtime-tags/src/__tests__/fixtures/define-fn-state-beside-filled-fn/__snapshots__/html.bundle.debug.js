// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_mark($scope1_id, "#text/0", a() + b())}</p>`);
		_scope($scope1_id, {
			a: _write_if($scope1_reason, 2) && a,
			b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		});
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	Row.content({
		a: _resume(() => count, "__tests__/template.marko_0/a", $scope0_id),
		b: _resume(() => input.x, "__tests__/template.marko_0/b", $scope0_id)
	});
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_x: input.x,
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_x: ["input.x"],
		count: "1:6"
	});
}, 1);
