// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 0;
	_html(`<div id=outside>${_escape(value)}${_el_resume($scope0_id, "#text/0")}</div>`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(value, 3), (value) => {
			const $scope3_id = _scope_id();
			_html(`<div id=inside>${_escape(value)}${_el_resume($scope3_id, "#text/0")}</div>`);
			_script($scope3_id, "__tests__/template.marko_3_value");
			_script($scope3_id, "__tests__/template.marko_3");
			writeScope($scope3_id, { value }, "__tests__/template.marko", "7:3", { value: "7:9" });
		});
		_subscribe($value__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:1"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { "ClosureScopes:value": $value__closures }, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
