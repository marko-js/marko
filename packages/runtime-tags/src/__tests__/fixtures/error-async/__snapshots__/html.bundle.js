// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_await($scope0_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), () => {
		_scope_id();
		_html("failed");
	}, 0);
	_html("b");
}, 1);
