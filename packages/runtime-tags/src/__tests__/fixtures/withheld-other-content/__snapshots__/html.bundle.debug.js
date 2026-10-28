// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	const Other = { content: _content_resume("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<b>other</b>");
	}, $scope0_id) };
	_html(`<button>other</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, { Other }, "__tests__/tags/card.marko", 0, { Other: "2:9" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</span>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/4": $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
