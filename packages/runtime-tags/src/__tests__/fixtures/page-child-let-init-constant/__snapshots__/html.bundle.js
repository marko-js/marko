// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_more = _write_guard($scope0_reason, 1), $wi__input_more = _write_if($scope0_reason, 1), $wi__input_more__OR__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	let T = input.tag;
	let f = input.fmt;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_escape(n)}</p>`);
			_dynamic_tag($scope1_id, "b", T, { label: input.label }, 0, 0, $wg__input_label);
			_html(`<i>${_text_resume($scope1_id, "c", f(input.label), $wg__input_label)}</i>`);
			$wi__input_more__OR__input_label && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_more);
	$wi__input_more__OR__input_label && _scope($scope0_id, {
		h: $wi__input_more && input.label,
		i: $wi__input_more && n,
		j: T,
		k: f
	});
	$wg__input_more || $wi__input_more__OR__input_label && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label__OR__input_more = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const wrap = _resume((v) => "w-" + v, "a0");
	_set_scope_reason($wg__input_label__OR__input_more << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id();
	outer_default({
		n: 1,
		tag: card_default,
		fmt: wrap,
		label: input.label,
		more: input.more
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
