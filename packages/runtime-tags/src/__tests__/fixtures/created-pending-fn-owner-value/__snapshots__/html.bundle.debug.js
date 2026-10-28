// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = open ? input.fn : () => "-";
	_html(`<button>${_text_resume($scope0_id, "#text/1", g())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_fn: input.fn,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_fn: ["input.fn"],
		open: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "#text/0", v, $wg__input_promise));
			$wi__input_promise && _scope($scope3_id, {}, "__tests__/template.marko", "2:4");
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_2_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({ fn: _resume(function() {
			return "f:" + input.label;
		}, "__tests__/template.marko_1/fn", $scope1_id) });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": $wi__input_label && _existing_scope($childScope)
		}, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_label#0:3/subscribe", _write_guard($scope0_reason, 0));
		_write_guard($scope0_reason, 0) || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content");
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_promise/6": $wi__input_promise && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
