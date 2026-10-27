// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "#text/0", k)}</p>`);
				_subscribe($k__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/card.marko", "2:26"), "__tests__/tags/card.marko_2_k#0:5/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__open, $wg__open, 0, 0, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2");
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Panel.content({ open: k });
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		k,
		"ClosureScopes:k/6": $k__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/card.marko", 0, { k: "1:6" });
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
