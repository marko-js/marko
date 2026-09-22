// tags/wrapper/index.marko
var wrapper_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_button_label = _serialize_if($scope0_reason, 0), $si__rest = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $label__closures = /* @__PURE__ */ new Set();
	const $rest__closures = /* @__PURE__ */ new Set();
	const { button } = input;
	const { label: $label2, ...rest } = button || {};
	wrapper_default({ content: _content("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const { label } = button;
		_html(`<button${_attrs(rest, "a", $scope1_id, "button")}>${_text_resume($scope1_id, "b", label, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_subscribe($si__rest && $rest__closures, _subscribe($si__input_button_label && $label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) });
	_scope($scope0_id, {
		g: $si__input_button_label && $label__closures,
		h: $si__rest && $rest__closures
	});
}, 1);
