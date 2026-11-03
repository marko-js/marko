// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = { fn: _resume(function() {
		return "f:" + input.label;
	}, "__tests__/tags/card.marko_0/_return", $scope0_id) };
	_scope($scope0_id, { input_label: input.label }, "__tests__/tags/card.marko", 0, { input_label: ["input.label"] });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let r = card_default({ label: input.label });
			$wi__input_label && _var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_r#4/var");
			let l = r;
			_html(`<p>${_text_resume($scope1_id, "#text/2", l.fn())}</p><button>set</button>${_el_resume($scope1_id, "#button/3")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
