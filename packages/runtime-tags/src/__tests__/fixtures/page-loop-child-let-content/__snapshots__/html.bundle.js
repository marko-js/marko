// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/outer.marko
var outer_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_content = _write_if($scope0_reason, 2), $wg__input_rows = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (r) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({ content: input.content });
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			_: $wi__input_content && _scope_with_id($scope0_id),
			a: $wi__input_content && _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_rows);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.content });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $wi__input_rows = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($wg__input_rows << 1 | $wg__input_rows << 3);
	const $childScope = _peek_scope_id();
	outer_default({
		rows: input.rows,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
			$wi__input_rows__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
			$wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_rows__OR__input_label && _scope($scope0_id, {
		e: $wi__input_rows && input.label,
		f: $wi__input_label && $input_label__closures,
		a: $wi__input_rows && _existing_scope($childScope)
	});
}, 1);
