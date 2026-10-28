// tags/inner.marko
var inner_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</p>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 1;
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "a")}`);
	_for_until(n, 0, 1, (i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_content << 1);
		const $childScope = _peek_scope_id();
		inner_default({ content: input.content });
		_scope($scope1_id, { a: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.content,
		f: n
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		d: input.label,
		e: $wi__input_label && $input_label__closures
	});
}, 1);
