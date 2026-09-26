// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = false;
	_html(`<button id=show>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope3_id = _scope_id();
				_html(`<button id=inner>inner</button>${_el_resume($scope3_id, "#button/0")}`);
				_script($scope3_id, "__tests__/template.marko_3");
				_scope($scope3_id, {}, "__tests__/template.marko", "7:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_await($scope1_id, "#text/1", resolveAfter("server", 1), (v) => {
			const $scope4_id = _scope_id();
			_html(`<div>${_escape(v)}</div>`);
		}, 0);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_show#2/subscribe");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:show": $show__closures }, "__tests__/template.marko", 0);
}, 1);
