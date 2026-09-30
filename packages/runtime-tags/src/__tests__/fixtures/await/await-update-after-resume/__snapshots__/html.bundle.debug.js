// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 0;
	_html(`<div id=outside>${_text_resume($scope0_id, "#text/0", value)}</div>`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(value), (value) => {
			const $scope3_id = _scope_id();
			_html(`<div id=inside>${_text_resume($scope3_id, "#text/0", value)}</div>`);
			_script($scope3_id, "__tests__/template.marko_3_value#2");
			_script($scope3_id, "__tests__/template.marko_3");
			_scope($scope3_id, { value }, "__tests__/template.marko", "7:3", { value: "7:9" });
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:1"), "__tests__/template.marko_1_value#0:2/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:value/3": $value__closures }, "__tests__/template.marko", 0);
}, 1);
