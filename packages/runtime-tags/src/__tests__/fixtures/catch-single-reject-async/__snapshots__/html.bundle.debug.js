// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("b");
		_await($scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 2), (data) => {
			const $scope3_id = _scope_id();
			_html(_escape(data));
		}, 0);
		_html("c");
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", (error) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`${_escape(error.message)}${_el_resume($scope2_id, "#text/0", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {}, "__tests__/template.marko", "8:4");
	}, $scope0_id) }) });
	_html("d");
	_await($scope0_id, "#text/1", resolveAfter("e", 1), (data) => {
		const $scope4_id = _scope_id();
		_html(_escape(data));
	}, 0);
	_html("f");
}, 1);
