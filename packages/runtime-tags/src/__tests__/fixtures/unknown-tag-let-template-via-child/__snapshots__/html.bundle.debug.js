// tags/item.marko
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.item;
	_html(`<button>clear</button>${_el_mark($scope0_id, "#button/0")}<section>`);
	_dynamic_tag($scope0_id, "#text/1", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "__tests__/tags/frame.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		T: _write_if($scope0_reason, 0) && T
	}, "__tests__/tags/frame.marko", 0, {
		input_label: ["input.label"],
		T: "1:6"
	});
});

// tags/host.marko
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_frame__OR__input_item__OR__input_label = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.frame, {
		item: input.item,
		label: input.label
	}, 0, 0, $wg__input_frame__OR__input_item__OR__input_label);
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		input_frame: _write_if($scope0_reason, 2) && input.frame,
		input_item: _write_if($scope0_reason, 1) && input.item,
		input_label: _write_if($scope0_reason, 0) && input.label
	}, "__tests__/tags/host.marko", 0, {
		input_frame: ["input.frame"],
		input_item: ["input.item"],
		input_label: ["input.label"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 1) << 1 | $wg__input_framed__OR__input_label << 3 | _write_guard($scope0_reason, 2) << 5 | $wg__input_framed__OR__input_label << 7);
	const $childScope = _peek_scope_id();
	host_default({
		frame: input.framed ? frame_default : null,
		item: item_default,
		label: input.label
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
