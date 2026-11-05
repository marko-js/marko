// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let a = true;
	let count = 0;
	_html("<p>Count: ");
	_if(() => {
		if (a) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_html(_text_mark($scope2_id, "#text/0", count));
					_subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:18"), "__tests__/template.marko_2_count#0:7/subscribe");
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_b, $wg__input_b);
			_scope($scope1_id, {}, "__tests__/template.marko", "3:12");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`</p><button id=inc>inc</button>${_el_mark($scope0_id, "#button/1")}<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_b: input.b,
		a,
		count,
		"ClosureScopes:count/9": $count__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		a: "1:6",
		count: "2:6"
	});
}, 1);
