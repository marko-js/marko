// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $value__closures = new Set();
	let value = 0;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", resolveAfter(1, 3), (a) => {
			const $scope2_id = _scope_id();
			_html(`<button>${_text_mark($scope2_id, "#text/1", value)}</button>${_el_mark($scope2_id, "#button/0")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($value__closures, _scope($scope2_id, {}, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_value#0:2/subscribe");
		});
		_try($scope1_id, "#text/1", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter(2, 2), (b) => {
				const $scope4_id = _scope_id();
				_html(`<button>${_text_mark($scope4_id, "#text/1", value)}</button>${_el_mark($scope4_id, "#button/0")}`);
				_script($scope4_id, "__tests__/template.marko_4");
				_subscribe($value__closures, _scope($scope4_id, { "ClosureSignalIndex:value/3": 2 }, "__tests__/template.marko", "11:6"), "__tests__/template.marko_4_value#0:2/subscribe");
			});
			_html(`<button>${_text_mark($scope3_id, "#text/2", value)}</button>${_el_mark($scope3_id, "#button/1")}`);
			_script($scope3_id, "__tests__/template.marko_3");
			_subscribe($value__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:value/3": 1
			}, "__tests__/template.marko", "9:4"), "__tests__/template.marko_3_value#0:2/subscribe");
		}, () => {
			_scope_reason();
			const $scope7_id = _scope_id();
			_html("inner");
		}, void 0, "__tests__/template.marko_7*content");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, () => {
		_scope_reason();
		const $scope6_id = _scope_id();
		_html("outer");
	}, void 0, "__tests__/template.marko_6*content");
	_await($scope0_id, "#text/1", resolveAfter(3, 1), (c) => {
		const $scope5_id = _scope_id();
		_html(`<button>${_text_mark($scope5_id, "#text/1", value)}</button>${_el_mark($scope5_id, "#button/0")}`);
		_script($scope5_id, "__tests__/template.marko_5");
		_subscribe($value__closures, _scope($scope5_id, { "ClosureSignalIndex:value/3": 3 }, "__tests__/template.marko", "17:2"), "__tests__/template.marko_5_value#0:2/subscribe");
	});
	_scope($scope0_id, {
		value,
		"ClosureScopes:value/3": $value__closures
	}, "__tests__/template.marko", 0, { value: "3:6" });
	_resume_branch($scope0_id);
}, 1);
