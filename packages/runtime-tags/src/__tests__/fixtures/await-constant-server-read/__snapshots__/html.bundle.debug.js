// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", Promise.resolve(1), (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}:${_escape(x)}</p>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {}, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $wg__input_label);
	_html(`<button>interactive</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "ClosureScopes:input_label/5": $wi__input_label && $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
