// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $show__closures = new Set();
	let show = true;
	forOf(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (show) {
					const $scope3_id = _scope_id();
					_html(_escape(index));
					_scope($scope3_id, {}, "__tests__/template.marko", "5:6");
					return 0;
				}
			}, $scope2_id, "#text/0");
			_subscribe($show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_show#0:2/subscribe");
		}, void 0, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("caught");
		}, 0, "__tests__/template.marko_4*content");
		_scope($scope1_id, {
			"#LoopKey": index,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { "#LoopKey": "2:12" });
	});
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		"ClosureScopes:show/3": $show__closures
	}, "__tests__/template.marko", 0, { show: "1:6" });
}, 1);
