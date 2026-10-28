// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	const $k__closures = new Set();
	let k = input.n;
	const Panel = { content: _content("__tests__/tags/card.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "__tests__/tags/card.marko_1_input_w#0:5_k#0:6", 0);
		_subscribe($k__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card.marko", "2:2"), "__tests__/tags/card.marko_1_input_w#0:5/subscribe", 0), "__tests__/tags/card.marko_1_k#0:6/subscribe", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	Panel.content({});
	_html(`<button>x</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {
		input_w: input.w,
		k,
		"ClosureScopes:input_w/7": $wi__input_w && $input_w__closures,
		"ClosureScopes:k/8": $k__closures
	}, "__tests__/tags/card.marko", 0, {
		input_w: ["input.w"],
		k: "1:6"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n__OR__input_w = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id();
			card_default({
				n: input.n,
				w: input.w
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_n__OR__input_w && _scope_with_id($scope0_id),
				"#childScope/0": $wi__input_n__OR__input_w && _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", _write_guard($scope0_reason, 1), $wg__input_on);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		input_n: input.n,
		input_w: input.w
	}, "__tests__/template.marko", 0, {
		input_n: ["input.n"],
		input_w: ["input.w"]
	});
}, 1);
