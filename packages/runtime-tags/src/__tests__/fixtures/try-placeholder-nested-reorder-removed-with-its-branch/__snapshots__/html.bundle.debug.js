// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $inner__closures = new Set();
	let count = 0;
	let inner = true;
	_html(`<pre id=log></pre><button class=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<button class=hide></button>${_el_resume($scope0_id, "#button/2")}`);
	_try($scope0_id, "#text/3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (inner) {
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", resolveAfter(1, 1), (w) => {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_resume($scope3_id, "#text/0", count)}</span>`);
					_script($scope3_id, "__tests__/template.marko_3_count#0:4");
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "10:6"), "__tests__/template.marko_3_count#0:4/subscribe");
				});
				_scope($scope2_id, {}, "__tests__/template.marko", "9:4");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($inner__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), "__tests__/template.marko_1_inner#0:5/subscribe");
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_4*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/6": $count__closures,
		"ClosureScopes:inner/7": $inner__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
