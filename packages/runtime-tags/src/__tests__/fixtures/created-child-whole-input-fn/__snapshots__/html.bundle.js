// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<p>${_text_resume($scope1_id, "a", input.fn(), $wg__input)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		d: input,
		e: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($wg__input_label << 1);
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
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show);
	_scope($scope0_id, { e: input.label });
}, 1);
