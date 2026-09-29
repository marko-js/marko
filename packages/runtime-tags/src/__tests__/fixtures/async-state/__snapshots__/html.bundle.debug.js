// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clickCount__closures = new Set();
	let clickCount = 0;
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(clickCount), (value) => {
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "#text/0", value));
			_scope($scope3_id, {}, "__tests__/template.marko", "7:4");
		});
		_subscribe($clickCount__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"), "__tests__/template.marko_1_clickCount#2/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("LOADING...");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		clickCount,
		"ClosureScopes:clickCount/3": $clickCount__closures
	}, "__tests__/template.marko", 0, { clickCount: "2:6" });
}, 1);
