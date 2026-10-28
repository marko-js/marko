// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	let f = input.fn;
	_html(`<p>${_escape(f())}</p>`);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ fn: function() {
				return "f:" + input.label;
			} });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_label && _scope_with_id($scope0_id),
				a: $wi__input_label && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_show, 0, 0, 1);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.label });
}, 1);
