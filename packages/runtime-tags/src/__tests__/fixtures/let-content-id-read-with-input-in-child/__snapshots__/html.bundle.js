// tags/field.marko
var field_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id__OR__input_label = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html(`<input${_attr("id", input.id)}${_attr("title", input.label + " " + input.id)}>${_el_mark($scope0_id, "a", $wg__input_id__OR__input_label)}<label${_attr("for", input.id)}>${_text_mark($scope0_id, "c", input.label, $wg__input_label)}</label>${_el_mark($scope0_id, "b", $wg__input_id)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.id,
		g: _write_if($scope0_reason, 1) && input.label
	});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id();
		_set_scope_reason($wg__input_label << 1 | $wg__input_label << 5);
		const $childScope = _peek_scope_id();
		field_default({
			id: uid,
			label: input.label
		});
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a0", 0);
		$wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { e: $input_label__closures });
}, 1);
