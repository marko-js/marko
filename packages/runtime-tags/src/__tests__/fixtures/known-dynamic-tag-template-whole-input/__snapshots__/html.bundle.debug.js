// tags/item.marko
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame-label.marko
var frame_label_default = _template("__tests__/tags/frame-label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_data_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<pre>${_text_mark($scope0_id, "#text/0", input.data.label, $wg__input_data_label)}</pre>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/frame-label.marko", 0);
});

// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.item, { label: "item" }, 0, 0, $wg__input_item);
	_html("</section>");
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	frame_label_default({ data: input });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/frame.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 0, 0, $wg__input_framed__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_framed: _write_if($scope0_reason, 2) && input.framed,
		input_label: _write_if($scope0_reason, 1) && input.label
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"]
	});
}, 1);
