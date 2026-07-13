// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter("A Value", 2), (v) => {
			_scope_id();
			_html(`<div>Resolved A: ${_escape(v)}</div>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("Rejected A");
	}, $scope0_id) }) });
	_try($scope0_id, "b", _content_resume("a3", () => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("rejected b"), 1), (v) => {
			_scope_id();
			_html(`<div>Resolved B: ${_escape(v)}</div>`);
		}, 0);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("Rejected B");
	}, $scope0_id) }) });
}, 1);
