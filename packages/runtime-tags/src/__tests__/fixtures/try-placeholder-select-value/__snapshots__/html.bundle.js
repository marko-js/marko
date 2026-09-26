// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_attr_select_value($scope0_id, "a", "b", void 0, () => {
		_html(`<select><option${_attr_option_value("a")}>A</option>`);
		_try($scope0_id, "b", _content_resume("a1", () => {
			const $scope1_id = _scope_id();
			_scope_reason();
			_await($scope1_id, "a", resolveAfter("b", 1), (v) => {
				_scope_id();
				_html(`<option${_attr_option_value(v)}>async ${_escape(v)}</option>`);
			}, 0);
		}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a0", () => {
			_scope_reason();
			_scope_id();
			_html(`<option${_attr_option_value("b")}>placeholder b</option>`);
		}, $scope0_id) }) });
		_html("</select>");
	});
}, 1);
