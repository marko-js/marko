// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let i = input;
	_html(`<p>${_escape(i.opts.label)}</p>`);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const k = "fn";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ opts: {
				a: { [k]() {
					return "f:" + input.label;
				} },
				label: input.label
			} });
			$wi__input_show__OR__input_label && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	$wi__input_show__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		k
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		k: "1:8"
	});
}, 1);
