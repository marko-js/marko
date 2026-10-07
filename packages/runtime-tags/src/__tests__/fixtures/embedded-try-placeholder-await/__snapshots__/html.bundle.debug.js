// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<p>b ${_text_resume($scope1_id, "#text/0", value, 2)}</p>`);
		_await($scope1_id, "#text/1", resolveAfter("x", 1), (v) => {
			const $scope3_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_value#0:2/subscribe");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		value,
		"ClosureScopes:value/3": $value__closures
	}, "__tests__/template.marko", 0, { value: "3:6" });
});
