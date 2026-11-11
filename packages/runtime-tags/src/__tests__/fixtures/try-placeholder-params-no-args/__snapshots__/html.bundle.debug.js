// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = "a";
	_html(`<button></button>${_el_mark($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(value), (v) => {
			const $scope3_id = _scope_id();
			_html(_text_mark($scope3_id, "#text/0", v));
			_scope($scope3_id, {}, "__tests__/template.marko", "6:4");
		});
		_subscribe($value__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_value#0:2/subscribe", 0);
		_resume_branch($scope1_id);
	}, ($label) => {
		const $scope2_reason = _scope_reason(), $wg__$label = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		const label = void 0 !== $label ? $label : "loading";
		_html(_text_mark($scope2_id, "#text/0", label, $wg__$label * 2));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:value/3": $value__closures }, "__tests__/template.marko", 0);
}, 1);
