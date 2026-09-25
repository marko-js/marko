// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 0;
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(1, 1), (x) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_resume($scope2_id, "#text/1", value)}</button>${_el_resume($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($value__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"), "__tests__/template.marko_2_value#2/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading button");
	}, $scope0_id) }) });
	_await($scope0_id, "#text/1", value ? value : resolveAfter(value, 3), (v) => {
		const $scope4_id = _scope_id();
		_html(`<div>${_text_resume($scope4_id, "#text/0", v)}</div>`);
		_script($scope4_id, "__tests__/template.marko_4_v#2");
		_scope($scope4_id, { v }, "__tests__/template.marko", "10:2", { v: "10:8" });
	});
	_scope($scope0_id, {
		value,
		"ClosureScopes:value": $value__closures
	}, "__tests__/template.marko", 0, { value: "2:6" });
	_resume_branch($scope0_id);
}, 1);
