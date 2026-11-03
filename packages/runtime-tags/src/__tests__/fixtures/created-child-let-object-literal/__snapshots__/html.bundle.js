// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	let o = input.opts;
	const $return = o.label + "!";
	_html(`<span>${_escape(o.label)}</span>`);
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			let v = card_default({ opts: { label: input.label } });
			$wi__input_label && _var($scope1_id, "b", $childScope, "a0");
			_html(`<p>${_escape(v)}</p><button>log</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {
				e: v,
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.label });
}, 1);
