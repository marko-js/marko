// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $k__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	({ content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button>${_text_resume($scope1_id, "b", k)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b1");
		_subscribe($k__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2");
	}, $scope0_id) }).content({});
	_scope($scope0_id, {
		e: k,
		f: $k__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ n: input.n });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_n && _scope_with_id($scope0_id),
				a: $wi__input_n && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_on);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.n });
}, 1);
