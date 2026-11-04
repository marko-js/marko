// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $clicks__closures = new Set();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", clicks)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/2", resolveAfter("first", 1), () => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter("done", 2), () => {
				const $scope4_id = _scope_id();
				_html(`<b>loaded ${_text_resume($scope4_id, "#text/0", clicks, 2)}</b>`);
				_subscribe($clicks__closures, _scope($scope4_id, { "ClosureSignalIndex:clicks/4": 1 }, "__tests__/template.marko", "10:6"), "__tests__/template.marko_4_clicks#0:3/subscribe");
			});
			_scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4");
		}, () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>loading ${_text_resume($scope2_id, "#text/0", clicks, 2)}</i>`);
			_subscribe($clicks__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"), "__tests__/template.marko_2_clicks#0:3/subscribe");
		}, void 0, "__tests__/template.marko_2*content");
		_scope($scope1_id, {}, "__tests__/template.marko", "5:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		clicks,
		"ClosureScopes:clicks/4": $clicks__closures
	}, "__tests__/template.marko", 0, { clicks: "3:6" });
}, 1);
