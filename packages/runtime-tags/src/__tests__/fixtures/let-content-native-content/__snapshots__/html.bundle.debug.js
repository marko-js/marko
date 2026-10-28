// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_attr_content("#section/0", $scope0_id, input.content, $wg__input_content);
	_html(`</section>${_el_resume($scope0_id, "#section/0", $wg__input_content)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $o__closures = new Set();
	let o = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (o) {
				const $scope2_id = _scope_id();
				_set_scope_reason(2);
				const $childScope = _peek_scope_id();
				card_default({ content: o });
				_subscribe($o__closures, _scope($scope2_id, {
					"#childScope/0": _existing_scope($childScope),
					"ClosureSignalIndex:o/6": 1
				}, "__tests__/tags/outer.marko", "4:4"), "__tests__/tags/outer.marko_2_o#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, 1, 0, 0, 1);
		_subscribe($o__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/outer.marko", "3:2"), "__tests__/tags/outer.marko_1_o#0:5/subscribe");
	}, void 0, (err) => {
		const $scope3_reason = _scope_reason(), $wg__err_message = _write_guard($scope3_reason, 0);
		const $scope3_id = _scope_id();
		_html(`<p>caught ${_text_resume($scope3_id, "#text/0", err.message, $wg__err_message * 2)}</p>`);
		_write_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/tags/outer.marko", "5:4");
	}, void 0, "__tests__/tags/outer.marko_3*content");
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_scope($scope0_id, { "ClosureScopes:o/6": $o__closures }, "__tests__/tags/outer.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_html(`<h1>${_text_resume($scope0_id, "#text/0", input.label, $wg__input_label)}</h1>`);
	outer_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>static ${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"), "__tests__/template.marko_1_input_label#0:4/subscribe", $wg__input_label);
		$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/5": $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
