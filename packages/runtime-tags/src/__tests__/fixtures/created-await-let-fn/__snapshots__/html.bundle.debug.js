// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id();
				const $childScope = _peek_scope_id();
				card_default({ fn: function() {
					return v + ":" + input.label;
				} });
				$wi__input_show__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
					v: $wi__input_label && v,
					_: _scope_with_id($scope1_id),
					"#childScope/0": $wi__input_label && _existing_scope($childScope)
				}, "__tests__/template.marko", "2:17", { v: "2:23" }), "__tests__/template.marko_2_input_label#0:4/subscribe", _write_guard($scope0_reason, 2));
				_write_guard($scope0_reason, 2) || $wi__input_show__OR__input_label && _resume_branch($scope2_id);
			}, _write_guard($scope0_reason, 0));
			$wi__input_show__OR__input_label && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
