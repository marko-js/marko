// tags/wrapper/index.marko
var wrapper_default = _template("__tests__/tags/wrapper/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrapper/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_button_label = _serialize_if($scope0_reason, 0), $si__rest = _serialize_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	const $rest__closures = new Set();
	const { button } = input;
	const { label: $label2, ...rest } = button || {};
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const { label } = button;
		_html(`<button${_attrs(rest, "#button/0", $scope1_id, "button")}>${_text_resume($scope1_id, "#text/1", label, _serialize_guard($scope0_reason, 0))}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_rest#5");
		_subscribe($si__rest && $rest__closures, _subscribe($si__input_button_label && $label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2", { "EventAttributes:#button/0": ["...rest", "4:21"] })));
	}, $scope0_id) });
	_scope($scope0_id, {
		"ClosureScopes:label": $si__input_button_label && $label__closures,
		"ClosureScopes:rest": $si__rest && $rest__closures
	}, "__tests__/template.marko", 0);
}, 1);
