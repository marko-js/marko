// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(input.label), (x) => {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", x, $wg__input_label)}</p>`);
				_if(() => {
					if (n % 2) {
						const $scope3_id = _scope_id();
						_html(`<em>${_text_resume($scope3_id, "#text/0", x, $wg__input_label)}:${_text_resume($scope3_id, "#text/1", n, 2)}</em>`);
						_subscribe($n__closures, _scope($scope3_id, { "ClosureSignalIndex:n/8": 1 }, "__tests__/template.marko", "6:6"), "__tests__/template.marko_3_n#0:6/subscribe");
						return 0;
					}
				}, $scope2_id, "#text/1", 1, 1, 0, 0, 1);
				_script($scope2_id, "__tests__/template.marko_2_x#3");
				_subscribe($n__closures, _scope($scope2_id, { x }, "__tests__/template.marko", "4:4", { x: "4:10" }), "__tests__/template.marko_2_n#0:6/subscribe");
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), _write_guard($scope0_reason, 1));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		n,
		"ClosureScopes:n/8": $n__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	});
}, 1);
