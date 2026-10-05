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
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", resolveAfter(1, 1), (v) => {
					const $scope3_id = _scope_id();
					_html(`<span class=body>${_escape(v)}${_text_resume($scope3_id, "#text/1", count, 2)}</span>`);
					_subscribe($count__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "10:6"), "__tests__/template.marko_3_count#0:5/subscribe");
				});
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:4");
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("loading");
			}, void 0, "__tests__/template.marko_5*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_await($scope0_id, "#text/4", resolveAfter(1, 2), (y) => {
		const $scope4_id = _scope_id();
		_html(`<span class=after>${_text_resume($scope4_id, "#text/0", count)}</span>`);
		_subscribe($count__closures, _scope($scope4_id, {
			_: _scope_with_id($scope0_id),
			"ClosureSignalIndex:count/7": 1
		}, "__tests__/template.marko", "14:2"), "__tests__/template.marko_4_count#0:5/subscribe");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1);
