// tags/label.marko
var label_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.get });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const { v } = item;
		const $childScope = _peek_scope_id();
		label_default({ get: _resume(function() {
			return v + "!";
		}, "a0", $scope1_id) });
		_scope($scope1_id, {
			d: v,
			a: $wi__input_items && _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", $wg__input_items, $wg__input_items, 0, 0, 1);
	$wi__input_items && _scope($scope0_id, {});
}, 1);
