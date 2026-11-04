// tags/item.marko
var item_default = _template("d", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/frame-label.marko
var frame_label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_data_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<pre>${_text_mark($scope0_id, "a", input.data.label, $wg__input_data_label)}</pre>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/frame.marko
var frame_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.item, { label: "item" }, 0, 0, $wg__input_item);
	_html("</section>");
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	frame_label_default({ data: input });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { b: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 0, 0, $wg__input_framed__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.framed,
		e: _write_if($scope0_reason, 1) && input.label
	});
}, 1);
