// tags/wrapper/index.marko
var wrapper_default = _template("__tests__/tags/wrapper/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</div>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrapper/index.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_button_label = _write_if($scope0_reason, 1), $wi__rest = _write_if($scope0_reason, 2), $wi__input_button_label__OR__rest = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $label__closures = new Set();
	const $rest__closures = new Set();
	const { button } = input;
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const { label, ...rest } = button;
		_html(`<button${_attrs(rest, "#button/0", $scope1_id, "button")}>${_text_resume($scope1_id, "#text/1", label, _write_guard($scope0_reason, 1))}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_rest#0:5");
		_subscribe($wi__rest && $rest__closures, _subscribe($wi__input_button_label && $label__closures, _scope($scope1_id, { _: $wi__input_button_label__OR__rest && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2", { "EventAttributes:#button/0": ["...rest", "4:21"] }), "__tests__/template.marko_1_label#0:4/subscribe"), "__tests__/template.marko_1_rest#0:5/subscribe");
	}, $scope0_id) });
	$wi__input_button_label__OR__rest && _scope($scope0_id, {
		"ClosureScopes:label/6": $wi__input_button_label && $label__closures,
		"ClosureScopes:rest/7": $wi__rest && $rest__closures
	}, "__tests__/template.marko", 0);
}, 1);
