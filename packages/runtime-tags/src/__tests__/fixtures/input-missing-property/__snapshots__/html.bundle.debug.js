// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $Child_content__input_name__closures = new Set();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (input.count) {
				const $scope2_id = _scope_id();
				if (true) {
					const $scope3_id = _scope_id();
					_html(`<div>${_escape(input.name || "Fallback")}</div>`);
					_scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "8:6");
				}
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_scope($scope1_id, { input_name: input.name }, "__tests__/template.marko", "6:2", { input_name: ["input.name", "6:15"] });
	}, $scope0_id) };
	_set_scope_reason(10);
	const $childScope = _peek_scope_id();
	Child.content({ count });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
