// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=counter>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { count }, "__tests__/tags/counter.marko", 0, { count: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", Promise.resolve(1), () => {
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", resolveAfter(1, 1), () => {
				const $scope4_id = _scope_id();
				counter_default({});
			}, 0);
		}, 0);
		_if(() => {
			if (show) {
				const $scope5_id = _scope_id();
				_html("<span>shown</span>");
				_scope($scope5_id, {}, "__tests__/template.marko", "12:4");
				return 0;
			}
		}, $scope1_id, "#text/1", 1, 1, 1, 0, 1);
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"), "__tests__/template.marko_1_show#0:2/subscribe");
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("loading");
	}, void 0, "__tests__/template.marko_2*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/3": $show__closures
	}, "__tests__/template.marko", 0, { show: "3:6" });
}, 1);
