// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const value = undefined;
	const Child = { content: _content("__tests__/template.marko_3_content", (input) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html("<div");
		_attrs_content(input, "#div/0", $scope3_id, "div");
		_html(`</div>${_el_resume($scope3_id, "#div/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_input");
		writeScope($scope3_id, {}, "__tests__/template.marko", "2:2");
	}) };
	Child.content({ content: _content("__tests__/template.marko_1_content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		if (value) {
			const $scope2_id = _scope_id();
			const { text } = value;
			_html(`<span${_attr_class(value.class)}>${_escape(text)}</span>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4");
		}
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2");
		_resume_branch($scope1_id);
	}) });
	writeScope($scope0_id, {
		value,
		value_class: value?.class,
		text: value?.text
	}, "__tests__/template.marko", 0, {
		value: "1:8",
		value_class: ["value.class", "1:8"],
		text: "8:16"
	});
}, 1);
