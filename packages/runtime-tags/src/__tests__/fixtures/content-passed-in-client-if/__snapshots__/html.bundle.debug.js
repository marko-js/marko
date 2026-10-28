// tags/inner.marko
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<p>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $wg__input_content);
	_html("</p>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/inner.marko", 0);
});

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = true;
	_html(`<button class=add>add</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_content << 1);
			const $childScope = _peek_scope_id();
			inner_default({ content: input.content });
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_content: input.content,
		on
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		on: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		$wg__input_label || _resume_branch($scope1_id);
	}, $scope0_id) });
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/4": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] });
}, 1);
