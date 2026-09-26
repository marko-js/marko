// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 1;
	_html(`<button>set</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "#text/0", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<span>${_text_resume($scope2_id, "#text/0", count)}</span>`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_count#2/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:2");
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:count": $count__closures }, "__tests__/template.marko", 0);
}, 1);
