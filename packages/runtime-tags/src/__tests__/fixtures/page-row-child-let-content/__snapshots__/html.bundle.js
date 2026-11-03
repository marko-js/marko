// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html(`<p>${_text_resume($scope0_id, "c", input.user.name, _write_guard($scope0_reason, 0))}</p></section>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = /* @__PURE__ */ new Set();
		_set_scope_reason($wg__input_rows << 1);
		const $childScope = _peek_scope_id();
		card_default({
			user: row.user,
			content: _content("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", row.id, $wg__input_rows)} ${_text_resume($scope2_id, "b", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_rows__OR__input_label && _subscribe($wi__input_rows && $for_content__row_id__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_rows || $wg__input_label), "a1", $wg__input_rows || $wg__input_label);
				$wg__input_rows || $wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		$wi__input_rows__OR__input_label && _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			g: $wi__input_rows && $for_content__row_id__closures,
			a: $wi__input_rows && _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", $wg__input_rows, $wg__input_rows, 0, 0, 1);
	$wi__input_rows__OR__input_label && _scope($scope0_id, {
		e: $wi__input_rows && input.label,
		f: $wi__input_label && $input_label__closures
	});
}, 1);
