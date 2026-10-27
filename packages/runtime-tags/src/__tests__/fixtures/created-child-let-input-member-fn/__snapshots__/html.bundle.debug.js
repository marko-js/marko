// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_opts_label = _write_guard($scope0_reason, 0), $wi__input_opts_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let all = input;
	const f = all.opts.fn;
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.opts.label, $wg__input_opts_label)}</p><p>${_escape(f())}</p>`);
	$wi__input_opts_label && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
	$wg__input_opts_label || $wi__input_opts_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			card_default({ opts: {
				fn() {
					return "f:" + input.label;
				},
				label: input.label
			} });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_label: input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
