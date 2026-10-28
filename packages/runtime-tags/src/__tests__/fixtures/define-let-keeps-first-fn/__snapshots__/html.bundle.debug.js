// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("__tests__/template.marko_2*content", ({ opts }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		let o = opts;
		_html(`<p>${_escape(o.fn())}</p>`);
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	Card.content({ opts: { fn() {
		return "root:" + input.label;
	} } });
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope2 = _peek_scope_id();
			Card.content({ opts: { fn() {
				return "if:" + input.label;
			} } });
			$wi__input_label__OR__input_show && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_label && _existing_scope($childScope2)
			}, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/1", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 2) && input.label,
		"#childScope/0": $wi__input_label && _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
