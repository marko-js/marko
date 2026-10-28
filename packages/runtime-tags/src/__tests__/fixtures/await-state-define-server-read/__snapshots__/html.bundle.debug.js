// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	const Row = { content: _content("__tests__/template.marko_1*content", (r) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__r_v = _write_guard($scope1_reason, 0), $wi__r_v = _write_if($scope1_reason, 0);
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}:${_text_resume($scope1_id, "#text/1", r.v, $wg__r_v * 2)}</em>`);
		($wi__input_label || $wi__r_v) && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: $wi__input_label && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label || $wg__r_v);
		$wg__input_label || $wg__r_v || ($wi__input_label || $wi__r_v) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_await($scope0_id, "#text/1", Promise.resolve(n), (x) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		Row.content({ v: x });
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
