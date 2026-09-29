// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("b");
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (data) => {
			_scope_id();
			_html(_escape(data));
		}, 0);
		_html("c");
	}, void 0, () => {}, void 0, "a0");
	_html("d");
}, 1);
