// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_await($scope1_id, "b", resolveAfter("sibling", 2), (w) => {
			_scope_id();
			_html(`<p>${_escape(w)}</p>`);
		}, 0);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, void 0, "a0");
}, 1);
