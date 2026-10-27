// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $return = input.x + "!";
	_html(`<span>${_text_resume($scope0_id, "a", input.x, $wg__input_x)}</span>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
	return $return;
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
			const $childScope = _peek_scope_id();
			let v = card_default({ x: input.label });
			$wi__input_label && _var($scope1_id, "b", $childScope, "c0");
			_html(`<p>${_text_resume($scope1_id, "c", v, $wg__input_label)}</p><button class=log>log</button>${_el_resume($scope1_id, "d")}`);
			_script($scope1_id, "c1");
			_scope($scope1_id, {
				e: v,
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.label });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = input.label;
	_html(`<button class=edit>edit</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(34 | _write_guard($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id();
	wrap_default({
		label,
		show: input.show
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: label,
		b: _existing_scope($childScope)
	});
}, 1);
