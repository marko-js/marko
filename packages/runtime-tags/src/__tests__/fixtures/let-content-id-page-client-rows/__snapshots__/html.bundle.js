// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const Field = { content: _content("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const uid = _id();
		_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_text_mark($scope1_id, "c", input.label, $wg__input_label)}</label>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_label);
	}, $scope0_id) };
	let rows = [Field, Field];
	_html(`<button>x</button>${_el_mark($scope0_id, "a")}`);
	_for_of(rows, (field) => {
		const $scope2_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		card_default({ content: field });
		_scope($scope2_id, { a: _existing_scope($childScope) });
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, { h: $wi__input_label && $input_label__closures });
}, 1);
