// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.fn,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ fn: _resume(function() {
				return "f:" + input.label;
			}, "a0", $scope1_id) });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_scope($scope0_id, { e: input.label });
}, 1);
