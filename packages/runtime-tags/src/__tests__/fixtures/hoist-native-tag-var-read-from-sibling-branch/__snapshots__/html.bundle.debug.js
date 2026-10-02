// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $out__closures = new Set();
	let out = "";
	_if(() => {
		if (input.a) {
			const $scope3_id = _scope_id();
			_html(`<div>a</div>${_el_resume($scope3_id, "#div/0")}`);
			_scope($scope3_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		} else {
			const $scope1_id = _scope_id();
			if (true) {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_resume($scope2_id, "#text/1", out)}</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_subscribe($out__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:4"), "__tests__/template.marko_2_out#0:4/subscribe");
			}
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_a);
	_scope($scope0_id, {
		out: _write_if($scope0_reason, 0) && out,
		"ClosureScopes:out/5": $out__closures
	}, "__tests__/template.marko", 0, { out: "1:6" });
	$wg__input_a || _resume_branch($scope0_id);
}, 1);
