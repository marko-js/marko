// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", value)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", value ? value : resolveAfter(value, 1), (v) => {
			const $scope3_id = _scope_id();
			_html(`<div>${_text_resume($scope3_id, "#text/0", v)}</div>`);
			_scope($scope3_id, {}, "__tests__/template.marko", "6:4");
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_value#3/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		value,
		"ClosureScopes:value/4": $value__closures
	}, "__tests__/template.marko", 0, { value: "2:6" });
}, 1);
