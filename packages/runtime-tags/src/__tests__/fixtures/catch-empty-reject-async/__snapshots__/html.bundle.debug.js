// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("a");
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("b");
		_await($scope1_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (data) => {
			const $scope2_id = _scope_id();
			_html(_escape(data));
		}, 0);
		_html("c");
	}, void 0, () => {}, void 0, "__tests__/template.marko_0_#text#0/catch");
	_html("d");
}, 1);
