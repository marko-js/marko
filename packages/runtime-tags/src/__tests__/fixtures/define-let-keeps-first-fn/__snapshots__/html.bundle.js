// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1);
	_write_guard($scope0_reason, 1);
	const $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_label__OR__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Card = { content: _content("a0", ({ opts }) => {
		_scope_id();
		_scope_reason();
		_html(`<p>${_escape(opts.fn())}</p>`);
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
				a: $wi__input_label && _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "b", _write_guard($scope0_reason, 0), $wg__input_show);
	$wi__input_label__OR__input_show && _scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && input.label,
		a: $wi__input_label && _existing_scope($childScope)
	});
}, 1);
