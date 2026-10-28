// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	const Other = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	_html(`<button>other</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_script($scope0_id, "b1");
	_scope($scope0_id, { g: Other });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</span>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { e: $input_label__closures });
}, 1);
