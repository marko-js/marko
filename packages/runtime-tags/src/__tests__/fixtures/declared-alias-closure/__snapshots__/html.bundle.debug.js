// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = undefined;
	const Child = { content: _content("__tests__/template.marko_3*content", (input) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<div");
		_attrs_content(input, "#div/0", $scope3_id, "div");
		_html(`</div>${_el_resume($scope3_id, "#div/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_input#2");
		_scope($scope3_id, {}, "__tests__/template.marko", "2:2", { "EventAttributes:#div/0": ["...input", "3:13"] });
	}, $scope0_id) };
	Child.content({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		if (value) {
			const $scope2_id = _scope_id();
			const { text } = value;
			_html(`<span${_attr_class(value.class)}>${_escape(text)}</span>`);
		}
	}, $scope0_id) });
}, 1);
