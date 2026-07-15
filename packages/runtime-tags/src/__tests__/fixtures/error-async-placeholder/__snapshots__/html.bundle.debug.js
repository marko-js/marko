// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("content", 1), (value) => {
			const $scope4_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", resolveAfter("placeholder", 2), (value) => {
			const $scope3_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, $scope0_id) }) });
}, 1);
