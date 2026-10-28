// tags/label-view.marko
var label_view_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { c: input });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _resume(() => "l" + input.title, "a1", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		label_view_default({ get: item.upper ? up : low });
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			d: _write_if($scope0_reason, 1) && item?.upper,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", $wg__input_title__OR__input_items, $wg__input_items, 0, 0, 1);
	_html("<button>noop</button>");
	_scope($scope0_id, {
		d: input.title,
		f: $wi__input_items && up,
		g: $wi__input_items && low
	});
}, 1);
