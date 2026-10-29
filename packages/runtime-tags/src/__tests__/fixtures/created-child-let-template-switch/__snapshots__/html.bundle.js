// tags/card.marko
var card_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/big.marko
var big_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<strong><i>${_text_resume($scope0_id, "a", input.label.toUpperCase(), $wg__input_label)}</i></strong>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.tag;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "d0");
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && T
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_big__OR__input_label = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id();
			outer_default({
				tag: input.big ? big_default : card_default,
				label: input.label
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_big__OR__input_label && _scope_with_id($scope0_id),
				a: $wi__input_big__OR__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_show);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.big,
		f: input.label
	});
}, 1);
