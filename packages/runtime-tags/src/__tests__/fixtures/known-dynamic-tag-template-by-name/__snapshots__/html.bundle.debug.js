// tags/item.marko
var item_default = _template("__tests__/tags/item.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.label, $wg__input_label)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/item.marko", 0);
});

// tags/frame.marko
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_item__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.item, { label: input.label }, 0, 0, $wg__input_item__OR__input_label);
	_html("</section>");
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_item: _write_if($scope0_reason, 2) && input.item,
		input_label: _write_if($scope0_reason, 1) && input.label
	}, "__tests__/tags/frame.marko", 0, {
		input_item: ["input.item"],
		input_label: ["input.label"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", input.framed ? frame_default : null, {
		item: item_default,
		label: input.label
	}, 0, 0, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_framed: _write_if($scope0_reason, 2) && input.framed,
		input_label: _write_if($scope0_reason, 1) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_framed: ["input.framed"],
		input_label: ["input.label"],
		n: "3:6"
	});
}, 1);
