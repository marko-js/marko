// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<span>${_escape(value)}</span>`);
		}, 0);
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, void 0, "__tests__/template.marko_3*content");
}, 1);
