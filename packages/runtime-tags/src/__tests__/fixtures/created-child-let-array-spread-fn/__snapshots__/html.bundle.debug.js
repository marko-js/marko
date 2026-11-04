// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	const f = o.list[0];
	_html(`<p>${_escape(f())}</p>`);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 4), $wi__input_show__OR__input_items__OR__input_label = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ opts: { list: [...input.items, () => "f:" + input.label] } });
			$wi__input_show__OR__input_items__OR__input_label && _scope($scope1_id, {
				_: $wi__input_items__OR__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_items__OR__input_label && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 3), $wg__input_show, 0, 0, 1);
	$wi__input_show__OR__input_items__OR__input_label && _scope($scope0_id, {
		input_items: _write_if($scope0_reason, 1) && input.items,
		input_label: _write_if($scope0_reason, 0) && input.label
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_label: ["input.label"]
	});
}, 1);
