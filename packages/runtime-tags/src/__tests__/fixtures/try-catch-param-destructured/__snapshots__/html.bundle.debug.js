// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", rejectAfter(new Error("boom")), (value) => {
			const $scope3_id = _scope_id();
			_html(_escape(value));
		}, 0);
	}, void 0, ({ message }) => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<b>${_text_mark($scope2_id, "#text/0", message, _write_guard($scope2_reason, 0))}</b>`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "3:4");
	}, 0, "__tests__/template.marko_2*content");
}, 1);
