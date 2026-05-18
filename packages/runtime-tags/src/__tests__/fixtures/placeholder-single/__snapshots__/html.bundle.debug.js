// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
		_await($scope1_id, "#text/0", resolveAfter("c", 2), (data) => {
			const $scope3_id = _scope_id();
			_html(_escape(data));
		}, 0);
		_html("d");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("_A_");
	}, $scope0_id) }) });
	_html("e");
	_await($scope0_id, "#text/1", resolveAfter("f", 1), (data) => {
		const $scope4_id = _scope_id();
		_html(_escape(data));
	}, 0);
	_html("g");
}, 1);
