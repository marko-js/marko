// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", resolveAfter("A Value", 2), (v) => {
			_scope_id();
			_html(`<div>Resolved A: ${_escape(v)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("Rejected A");
	}, void 0, "a0");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_await($scope4_id, "a", rejectAfter(/* @__PURE__ */ new Error("rejected b"), 1), (v) => {
			_scope_id();
			_html(`<div>Resolved B: ${_escape(v)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		_scope_id();
		_html("Rejected B");
	}, void 0, "a1");
}, 1);
