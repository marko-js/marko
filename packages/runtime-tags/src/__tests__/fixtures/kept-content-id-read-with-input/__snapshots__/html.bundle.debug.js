// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	card_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const uid = _id();
		_html(`<input${_attr("id", uid)}${_attr("title", input.label + " " + uid)}>${_el_mark($scope1_id, "#input/0", $wg__input_label)}<label${_attr("for", uid)}>${_text_mark($scope1_id, "#text/2", input.label, $wg__input_label)}</label>`);
		$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, {
			uid,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { uid: "2:7" }), "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/4": $input_label__closures }, "__tests__/template.marko", 0);
}, 1);
