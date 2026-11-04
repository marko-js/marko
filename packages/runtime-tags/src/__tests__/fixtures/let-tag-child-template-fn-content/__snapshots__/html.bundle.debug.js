// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	let c = input.content;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f())}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $childScope = _peek_scope_id();
	card_default({
		fn: function() {
			return "f:" + input.label;
		},
		content: _content("__tests__/tags/wrap.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
			$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2"), "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe", $wg__input_label);
			$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_label && _scope($scope0_id, {
		"ClosureScopes:input_label/4": $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	wrap_default({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
