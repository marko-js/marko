// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $n__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_await($scope2_id, "#text/0", Promise.resolve(n), (x) => {
					const $scope3_id = _scope_id();
					_html(`<p>${_text_resume($scope3_id, "#text/0", input.label, _write_guard($scope0_reason, 1))}:${_text_resume($scope3_id, "#text/1", x, 2)}</p>`);
					_subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:6"), "__tests__/template.marko_3_input_label#0:5/subscribe");
				});
				_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"), "__tests__/template.marko_2_n#0:6/subscribe", 0);
				_resume_branch($scope2_id);
			}, () => {
				_scope_reason();
				const $scope4_id = _scope_id();
				_html("loading");
			}, void 0, "__tests__/template.marko_4*content");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_show, $wg__input_show);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		n,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:n/8": $n__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	});
}, 1);
