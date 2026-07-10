// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const { value } = {
		foo: 1,
		value: 2,
		content: _content("__tests__/template.marko_1_content", () => {
			const $scope1_id = _scope_id();
			_scope_reason();
			_html("<div>unused body</div>");
		})
	};
	_html(`<div>${_escape(value)}</div>`);
}, 1);
