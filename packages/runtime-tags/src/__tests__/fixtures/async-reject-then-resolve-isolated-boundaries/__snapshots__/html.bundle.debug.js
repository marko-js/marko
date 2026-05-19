// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter("A Value", 2), (v) => {
			const $scope3_id = _scope_id();
			_html(`<div>Resolved A: ${_escape(v)}</div>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("Rejected A");
	}, $scope0_id) }) });
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_4_content", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "#text/0", rejectAfter(new Error("rejected b"), 1), (v) => {
			const $scope6_id = _scope_id();
			_html(`<div>Resolved B: ${_escape(v)}</div>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("__tests__/template.marko_5_content", () => {
		_scope_reason();
		const $scope5_id = _scope_id();
		_html("Rejected B");
	}, $scope0_id) }) });
}, 1);
