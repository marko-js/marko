// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	let show = true;
	_html(`<pre id=log></pre><button class=inc>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}<button class=hide></button>${_el_resume($scope0_id, "#button/2")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_await($scope4_id, "#text/0", rejectAfter(new Error("nope"), 1), (v) => {
					const $scope5_id = _scope_id();
					_html(_escape(v));
				}, 0);
			}, void 0, (err) => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", resolveAfter("caught", 2), (c) => {
					const $scope3_id = _scope_id();
					_html(`<span>${_text_resume($scope3_id, "#text/0", count)}</span>`);
					_script($scope3_id, "__tests__/template.marko_3_count#0:4");
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "12:8"), "__tests__/template.marko_3_count#0:4/subscribe");
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "11:6");
			}, void 0, "__tests__/template.marko_2*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/6": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
