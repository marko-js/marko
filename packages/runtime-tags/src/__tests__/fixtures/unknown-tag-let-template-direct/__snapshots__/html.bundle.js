// tags/item.marko
var item_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/frame.marko
var frame_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let T = input.item;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}<section>`);
	_dynamic_tag($scope0_id, "b", T, { label: input.label });
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		f: input.label,
		g: _write_if($scope0_reason, 0) && T
	});
});

// template.marko
function pick(framed) {
	return framed ? frame_default : null;
}
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_framed__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", pick(input.framed), {
		item: item_default,
		label: input.label
	}, 0, 0, $wg__input_framed__OR__input_label);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.framed,
		e: _write_if($scope0_reason, 1) && input.label
	});
}, 1);
