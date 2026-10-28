// tags/label-view.marko
var label_view_default = _template("__tests__/tags/label-view.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/label-view.marko_0_input#2");
	_scope($scope0_id, { input }, "__tests__/tags/label-view.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title__OR__input_items = _write_guard($scope0_reason, 0), $wg__input_items = _write_guard($scope0_reason, 2), $wi__input_items = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const up = _resume(() => "U" + input.title, "__tests__/template.marko_0/up", $scope0_id);
	const low = _resume(() => "l" + input.title, "__tests__/template.marko_0/low", $scope0_id);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		label_view_default({ get: item.upper ? up : low });
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			item_upper: _write_if($scope0_reason, 1) && item?.upper,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { item_upper: ["item.upper", "3:6"] });
	}, "id", $scope0_id, "#text/0", $wg__input_title__OR__input_items, $wg__input_items, 0, 0, 1);
	_html("<button>noop</button>");
	_scope($scope0_id, {
		input_title: input.title,
		up: $wi__input_items && up,
		low: $wi__input_items && low
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		up: "1:8",
		low: "2:8"
	});
}, 1);
