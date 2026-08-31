// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 1;
	_html(`<button>${_text_resume($scope0_id, "#text/1", value)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/2", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "__tests__/template.marko_2_value#3/pending");
			_html(`<span>${_text_resume($scope2_id, "#text/0", value)}</span>`);
			writeScope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:3");
			_resume_branch($scope2_id);
		});
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:1");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		value,
		"ClosureScopes:value": $value__closures
	}, "__tests__/template.marko", 0, { value: "2:5" });
	_resume_branch($scope0_id);
}, 1);
