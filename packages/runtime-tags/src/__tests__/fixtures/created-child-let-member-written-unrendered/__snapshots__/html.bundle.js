// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = input.opts;
	_html(`<p>${_escape(o.n)} ${_text_resume($scope0_id, "b", "-", 2)}</p><button>show</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { i: o?.label });
});

// template.marko
var template_default = _template("a", (input) => {
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
				a: $wi__input_label__OR__input_n && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 3), $wg__input_show);
	$wi__input_show__OR__input_label__OR__input_n && _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: _write_if($scope0_reason, 0) && input.n
	});
}, 1);
