// tags/item.marko
var item_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.item, { label: input.label }, 0, 0, $wg__input_item__OR__input_label);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.item,
		e: _write_if($scope0_reason, 1) && input.label
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "b", n)}</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 0, 0, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && input.framed,
		g: _write_if($scope0_reason, 1) && input.label,
		i: n
	});
}, 1);
