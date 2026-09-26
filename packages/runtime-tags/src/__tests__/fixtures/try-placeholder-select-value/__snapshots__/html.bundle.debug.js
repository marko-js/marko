// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_attr_select_value($scope0_id, "#select/0", "b", void 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option>`);
		_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_id = _scope_id();
			_scope_reason();
			_await($scope1_id, "#text/0", resolveAfter("b", 1), (v) => {
				const $scope3_id = _scope_id();
				_html(`<option${_attr_option_value(v)}>async ${_escape(v)}</option>`);
			}, 0);
		}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<option${_attr_option_value("b")}>placeholder b</option>`);
		}, $scope0_id) }) });
		_html("</select>");
	});
}, 1);
