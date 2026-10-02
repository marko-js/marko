// tags/wrapper/index.marko
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_button_label = _write_if($scope0_reason, 1), $wi__rest = _write_if($scope0_reason, 2), $wi__input_button_label__OR__rest = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	const $rest__closures = /* @__PURE__ */ new Set();
	wrapper_default({ content: _content("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const { label: $label2, ...rest } = input.button;
		_html(`<button${_attrs(rest, "a", $scope1_id, "button")}>${_text_resume($scope1_id, "b", input.button.label, _write_guard($scope0_reason, 1))}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($wi__rest && $rest__closures, _subscribe($wi__input_button_label && $label__closures, _scope($scope1_id, { _: $wi__input_button_label__OR__rest && _scope_with_id($scope0_id) }), "a1"), "a2");
	}, $scope0_id) });
	$wi__input_button_label__OR__rest && _scope($scope0_id, {
		g: $wi__input_button_label && $label__closures,
		h: $wi__rest && $rest__closures
	});
}, 1);
