// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_html(`<p>${_escape(o.label)}</p><button>log</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0_o_label#6");
	_scope($scope0_id, { o_label: o?.label }, "__tests__/tags/card.marko", 0, { o_label: ["o.label", "1:6"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_n = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_label__OR__input_n = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ opts: {
				label: input.label,
				n: input.n
			} });
			$wi__input_show__OR__input_label__OR__input_n && _scope($scope1_id, {
				_: $wi__input_label__OR__input_n && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label__OR__input_n && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 3), $wg__input_show);
	$wi__input_show__OR__input_label__OR__input_n && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		input_n: _write_if($scope0_reason, 0) && input.n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_n: ["input.n"]
	});
}, 1);
