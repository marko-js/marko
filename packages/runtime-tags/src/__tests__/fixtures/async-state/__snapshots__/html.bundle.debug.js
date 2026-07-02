// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(clickCount), (value) => {
			const $scope3_id = _scope_id();
			_html(`${_escape(value)}${_el_resume($scope3_id, "#text/0")}`);
			writeScope($scope3_id, {}, "__tests__/template.marko", "7:4");
		});
		_subscribe($clickCount__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2_content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING...");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "2:6" });
	_resume_branch($scope0_id);
}, 1);
