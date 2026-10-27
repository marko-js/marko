// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>${_text_resume($scope1_id, "#text/1", k)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/tags/card.marko_1");
		_subscribe($k__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2"), "__tests__/tags/card.marko_1_k#0:4/subscribe");
	}, $scope0_id) };
	Panel.content({});
	_scope($scope0_id, {
		k,
		"ClosureScopes:k/5": $k__closures
	}, "__tests__/tags/card.marko", 0, { k: "1:6" });
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ n: input.n });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_n && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_n && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 0), $wg__input_on);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { input_n: input.n }, "__tests__/template.marko", 0, { input_n: ["input.n"] });
}, 1);
